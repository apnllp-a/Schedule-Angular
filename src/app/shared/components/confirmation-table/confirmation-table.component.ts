import { AfterViewInit, Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import {ConfirmationService, MessageService, PrimeNGConfig} from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';
import { Tutorial  } from "../../../models/tutorial.model";
import { ServicesTestService } from "../../../services/services-test.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-table',
  templateUrl: './confirmation-table.component.html',
  styleUrls: ['./confirmation-table.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ConfirmationTableComponent {
  first = 0;
  rows = 10;
  length=0;
  tutorials: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  name = '';

  // products = [
  //   {
  //     code: 125125,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125126,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125127,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125128,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125129,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125130,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125131,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125132,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125133,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125134,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125135,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   },
  //   {
  //     code: 125136,
  //     name: 'Honkai Impact 3',
  //     category: 'Games',
  //     quantity: '5 Star'
  //   }
  // ];
  
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
    return this.tutorials ? this.first === (this.tutorials.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.tutorials  ? this.first === 0 : true;
}






confirm(event: Event) {
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: "ยืนยันการสมัครหรือ ไม่",
    icon: "pi pi-exclamation-triangle",
    accept: () => {
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
  constructor(   private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,private servicetestService: ServicesTestService
    ,private route: ActivatedRoute,
    private router: Router, private http: HttpClient) {
   
}


retrieveTutorials(): void {
  this.servicetestService.getAll()
    .subscribe({
      next: (data) => {
        this.tutorials = data;
       this.length = data.length;
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
  this.servicetestService.findByName(this.name)
    .subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
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

ngOnInit() {
  this.primengConfig.ripple = true;
  this.retrieveTutorials();
console.log(this.tutorials?.length);
}
}






