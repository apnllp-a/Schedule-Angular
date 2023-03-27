import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-head-page',
  templateUrl: './document-head-page.component.html',
  styleUrls: ['./document-head-page.component.scss']
})
export class DocumentHeadPageComponent implements OnInit {
  today: number = Date.now();
  selected = 'option2';
  constructor() { }

  ngOnInit(): void {
  }

}
