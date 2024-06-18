import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserAllService } from 'src/app/services/user/user-all.service';
import { UserAll } from '../../../models/user/user-all.model';
import { StorageService } from '../_services/storage.service';
import { UsersService } from "src/app/services/api_/users.service";
import { User } from "src/app/services/api_/users.service";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user_all: any;
  num:number;
  storedValues: string | null;
  password:string = '';
  firstname:string = '';
  lastname:string = '';
  tal:string = '';
  email:string = '';
  id:string;

  constructor( private UsersService: UsersService,private storageService: StorageService) { }
  // @Inject(MAT_DIALOG_DATA) public data:any,
  ngOnInit(): void {
    // this.num = this.data.index;
      this.storedValues = this.storageService.getItem('username');
    
    this.retrieveUserAlls();

  }


  retrieveUserAlls(): void {
    this.storedValues = this.storageService.getItem('username'); // Retrieve the value each time the method is called

    if (this.storedValues) {
      this.UsersService.getUser(this.storedValues)
        .subscribe({
          next: (data) => {
            this.user_all = data;
            
            console.log(this.user_all);
          },
          error: (e) => console.error(e)
        });
    } else {
      console.error('No stored value found in local storage.');
    }
  }


  update(id:string): void {

    const data = {
      // username: this.tutorial.username,
      // password: this.tutorial.password,
      firstname: this.firstname,
      lastname: this.lastname,
      // position: position ,
      tal: this.tal ,
      eamil: this.email 

    };

    this.UsersService.update(this.id, data)
      .subscribe({
        next: (data) => {
          this.user_all = data;
          console.log(data)

        },
        error: (e) => console.error(e)
      });
  }

  
}
