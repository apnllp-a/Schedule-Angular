import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-page-it',
  templateUrl: './main-page-it.component.html',
  styleUrls: ['./main-page-it.component.scss'],
})
export class MainPageItComponent implements OnInit {
  
  confirm:boolean= true;

  @ViewChild('test',{read:ElementRef}) test?: ElementRef<HTMLImageElement>

  searchList(text:string){
    console.log('Name searched: ' + text);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
