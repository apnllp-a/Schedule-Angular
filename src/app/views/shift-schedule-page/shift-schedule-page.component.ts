import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-schedule-page',
  templateUrl: './shift-schedule-page.component.html',
  styleUrls: ['./shift-schedule-page.component.scss']
})
export class ShiftSchedulePageComponent implements OnInit {
  loopCount = Array(10).fill(0);
  successStatus =false;
  constructor() { }

  ngOnInit(): void {
  }

}
