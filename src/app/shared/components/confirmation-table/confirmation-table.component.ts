import { AfterViewInit, Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';
import { Tutorial } from "../../../models/tutorial.model";
import { ServicesTestService } from "../../../services/services-test.service";
import { ActivatedRoute, Router } from '@angular/router';
import { UserAllService } from '../../../services/user/user-all.service';
import { UserAll } from 'src/app/models/user/user-all.model';
@Component({
  selector: 'app-confirmation-table',
  templateUrl: './confirmation-table.component.html',
  styleUrls: ['./confirmation-table.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ConfirmationTableComponent {
  first = 0;
  rows = 10;
  length = 0;
  lengthUserAll = 0;
  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  name = '';
  

  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(debounceTime(1000));

  inputSearch(text: string) {
    this.onInput.emit(text);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.tutorials ? this.first === (this.tutorials.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.tutorials ? this.first === 0 : true;
  }


  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "ยืนยันการสมัครหรือ ไม่",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.seveToUserAll(this.currentTutorial.id)
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "ยืนยันการสมัคร"
        });
      },
      reject: () => {
        this.deleteTutorial()
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "ยกเลิกการสมัคร"
        });
      }
    });
  }
  constructor(private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig, private servicetestService: ServicesTestService
    , private route: ActivatedRoute,
    private router: Router, private http: HttpClient, private userAllService: UserAllService) {


  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.retrieveTutorials();
    this.retrieveUserAlls()
  }

  retrieveUserAlls(): void {
    this.userAllService.getAll()
      .subscribe({
        next: (data) => {
          this.lengthUserAll = data.length;
        },
        error: (e) => console.error(e)
      });
  }

  retrieveTutorials(): void {
    this.servicetestService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          this.length = data.length;
          console.log(data)


        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.servicetestService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.servicetestService.findByName(this.name).subscribe({
      next: (data) => {
        this.tutorials = data;
      },
      error: (e) => console.error(e)
    });
  }

  seveToUserAll(id: string): void {
    this.servicetestService.get(id).subscribe({
      next: (data) => {
        console.log(data);
        this.currentTutorial = data;
        this.userAllService.create(data).subscribe({
          next: (res) => {
            console.log("Sent to user all" + res);
            this.servicetestService.delete(this.currentTutorial.id).subscribe({
              next: (value) => {
                console.log(value);
                this.refreshList();
              },
            })
          },
        })
      },
      error: (e) => console.error(e)
    });
  }

  deleteTutorial(): void {
    this.servicetestService.delete(this.currentTutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();

        },
        error: (e) => console.error(e)
      });

  }




}






