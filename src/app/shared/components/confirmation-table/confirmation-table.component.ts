import { AfterViewInit, Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';
import { Tutorial } from "../../../models/tutorial.model";
import { ServicesTestService } from "../../../services/services-test.service";
import { ActivatedRoute, Router } from '@angular/router';
import { UserAllService } from '../../../services/user/user-all.service';
import { User } from 'src/app/services/api_/users.service';
import { UsersService } from 'src/app/services/api_/users.service';
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
  tutorials: Tutorial[];
  sortedUserAll: Tutorial[] = [];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  name = '';
  btn_toggle = false;
  userId:any;
  

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


  confirm(userId: any) {
    if (userId) {
      this.confirmationService.confirm({
        message: 'ยืนยันการสมัครหรือไม่',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.updateStatus(userId, 'active');
          this.messageService.add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'ยืนยันการสมัคร'
          });
        },
        reject: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Rejected',
            detail: 'ยกเลิกการสมัคร'
          });
        }
      });
    } else {
      console.error('User ID is undefined.');
    }
  }

 
  constructor(private UsersService: UsersService,private confirmationService: ConfirmationService,
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
    this.UsersService.getActiveUsers()
      .subscribe({
        next: (data) => {
          this.lengthUserAll = data.length;
        },
        error: (e) => console.error(e)
      });
  }

  retrieveTutorials(): void {
    this.UsersService.getPendingUsers()
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

  sortUserAllByCreatedAt(): void {
    // Sort the data by createdAt
    this.tutorials.sort((a, b) => {
      if (a.createdAt !== undefined && b.createdAt !== undefined) {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
  
        return dateA.getTime() - dateB.getTime();
      } else {
        return a.createdAt === undefined ? -1 : 1;
      }
    });
  
    // Assign the sorted data to a property
    this.sortedUserAll = [...this.tutorials];

    this.tutorials = this.sortedUserAll;
  }


  sortUserAllByName(): void {
    // Sort the data by firstname
      this.userAllService.getAll()
        .subscribe({
          next: (data) => {
            // Sort the data by name in ascending order (A-Z) after checking for undefined values
            this.tutorials = data.sort((a: any, b: any) => {
              if (a.firstname !== undefined && b.firstname !== undefined) {
                return a.firstname.localeCompare(b.firstname);
              } else if (a.firstname !== undefined) {
                return 1; // Move 'a' to a higher index
              } else if (b.firstname !== undefined) {
                return -1; // Move 'b' to a higher index
              } else {
                return 0; // No change in order when both are undefined
              }
            });
          },
          error: (e) => console.error(e)
        });
    
 
  }

  private updateStatus(userId: any, newStatus: 'active' | 'pending' | 'disabled' | 'inactive') {
    this.UsersService.updateStatus(userId, newStatus).subscribe(
      response => {
        console.log('Status updated successfully:', response);
        // Optionally, you can perform actions after successful update
      },
      error => {
        console.error('Error updating status:', error);
      }
    );
  }

}






