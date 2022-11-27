import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { debounceTime } from 'rxjs';

interface City {
  name: string,
  code: string
}
interface Permiss {
  name: string,
  code: string
}
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class PermissionsComponent implements OnInit {
  
  cities: City[];
  permiss: Permiss[];
  selectedCity: City | undefined;
  first = 0;

  rows = 10;
  expression =true;

  products = [
    {
      code: 1,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal: ' 095-898-8991'
    },
    {
      code: 2,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal: ' 095-898-8991'
    },
    {
      code: 3,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal: ' 095-898-8991'
    },
    {
      code: 4,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal: ' 095-898-8991'
    },
    {
      code: 5,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal: ' 095-898-8991'
    },
    {
      code: 6,
      name: 'Honkai Impact 3',
      category: 'Games',
      quantity: '5 Star',
      tal: ' 095-898-8991'
    },
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
    this.permiss = [
        {name: 'IT', code: 'NY'},
        {name: 'HR', code: 'RM'},
        {name: 'GENERAL', code: 'PRS'},
        {name: 'HEADER', code: 'LDN'},
        {name: 'BOARD', code: 'IST'}
        
    ];
   
}

someMethod(value: any,) {
  console.log("selected value", value);
}


ngOnInit() {
  this.primengConfig.ripple = true;
}


}
