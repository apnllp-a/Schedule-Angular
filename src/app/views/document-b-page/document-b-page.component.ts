import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-b-page',
  templateUrl: './document-b-page.component.html',
  styleUrls: ['./document-b-page.component.scss']
})
export class DocumentBPageComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit(): void {
  }

}
