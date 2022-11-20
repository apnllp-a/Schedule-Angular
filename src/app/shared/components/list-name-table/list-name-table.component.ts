import { AfterViewInit, Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import {ConfirmationService, MessageService, PrimeNGConfig} from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-list-name-table',
  templateUrl: './list-name-table.component.html',
  styleUrls: ['./list-name-table.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ListNameTableComponent implements OnInit {

  cities: City[];

  selectedCity: City | undefined;
  first = 0;

  rows = 10;
  expression =true;

  products = [
    {
      code: 125125,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125126,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125127,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125128,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125129,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125130,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125131,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125132,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125133,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125134,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125135,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    },
    {
      code: 125136,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal:'095-888-7765'
    }
  ];
  
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
    return this.products ? this.first === (this.products .length - this.rows): true;
}

isFirstPage(): boolean {
    return this.products  ? this.first === 0 : true;
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
    private primengConfig: PrimeNGConfig) {
    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
}


ngOnInit() {
  this.primengConfig.ripple = true;
}

}
