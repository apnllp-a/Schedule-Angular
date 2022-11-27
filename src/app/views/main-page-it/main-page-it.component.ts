import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page-it',
  templateUrl: './main-page-it.component.html',
  styleUrls: ['./main-page-it.component.scss'],
})
export class MainPageItComponent implements OnInit {
  
  confirm:boolean= true;

  tests: any;
  testsID: string | null | undefined;

  searchList(text:string){
    console.log('Name searched: ' + text);
  }

 

  constructor(private activatedRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
   this.testsID = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
