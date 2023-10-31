import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserAllService } from 'src/app/services/user/user-all.service';
import { UserAll } from '../../../models/user/user-all.model';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user_all?: any;
  num:number;

  password:string = '';
  firstname:string = '';
  lastname:string = '';
  tal:string = '';
  email:string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private userAllService: UserAllService) { }

  ngOnInit(): void {
    this.num = this.data.index;
    console.log(this.num)
    this.retrieveUserAlls()
  }


  retrieveUserAlls(): void {
    this.userAllService.get(this.num)
      .subscribe({
        next: (data) => {
          this.user_all = data;
          console.log(data)

        },
        error: (e) => console.error(e)
      });
  }

  update(): void {

    const data = {
      // username: this.tutorial.username,
      // password: this.tutorial.password,
      firstname: this.firstname,
      lastname: this.lastname,
      // position: position ,
      tal: this.tal ,
      eamil: this.email 

    };

    this.userAllService.update(this.num , data)
      .subscribe({
        next: (data) => {
          this.user_all = data;
          console.log(data)

        },
        error: (e) => console.error(e)
      });
  }

  
}
