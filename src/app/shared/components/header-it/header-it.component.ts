import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-it',
  templateUrl: './header-it.component.html',
  styleUrls: ['./header-it.component.scss']
})
export class HeaderItComponent implements OnInit {
  displayUi =false;
  constructor() { }

  ngOnInit(): void {
  }

}
