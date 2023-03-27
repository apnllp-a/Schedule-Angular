import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-b',
  templateUrl: './main-page-b.component.html',
  styleUrls: ['./main-page-b.component.scss']
})
export class MainPageBComponent implements OnInit {
  today: number = Date.now();
  selected = 'option2';
  constructor() { }

  ngOnInit(): void {
  }

}
