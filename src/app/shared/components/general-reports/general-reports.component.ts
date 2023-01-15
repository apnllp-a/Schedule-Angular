import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-reports',
  templateUrl: './general-reports.component.html',
  styleUrls: ['./general-reports.component.scss']
})
export class GeneralReportsComponent implements OnInit {
//date
todayNumber: number = Date.now();
todayDate : Date = new Date();
todayString : string = new Date().toDateString();
todayISOString : string = new Date().toISOString();
  constructor() { }

  ngOnInit(): void {
  }

}
