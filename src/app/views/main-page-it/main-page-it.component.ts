import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-page-it',
  templateUrl: './main-page-it.component.html',
  styleUrls: ['./main-page-it.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MainPageItComponent implements OnInit {
  
  confirm:boolean= true;

  tests: any;
  testsID: string | null | undefined;

  searchList(text:string){
    console.log('Name searched: ' + text);
  }


  
 

  constructor(private activatedRoute: ActivatedRoute,public  authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
   this.testsID = this.activatedRoute.snapshot.paramMap.get('id');
  }


  // logout(): void {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }

}
