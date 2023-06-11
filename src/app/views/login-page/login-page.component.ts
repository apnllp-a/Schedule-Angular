import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesTestService } from 'src/app/services/services-test.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { NgZone } from '@angular/core';
import { UserAll } from 'src/app/models/user/user-all.model';
import { UserAllService } from 'src/app/services/user/user-all.service';
import mongoose from 'mongoose';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  tutorial: Tutorial = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    position: '',
    published: false
  };
  hide = true;
  constructor(private tutorialService: ServicesTestService, private router: Router) { }

  ngOnInit(): void {
  }

  //username
  username = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]);
  //password
  password = new FormControl('', [Validators.required, Validators.nullValidator]);
  
  goToPage(): void {
    this.router.navigate(['/main-page-hr']);
  }
  
  login(): void {

    const str1 = this.username+"";
    const str2 = this.password+"";
    const str3 =""


    if (str1 === 'admin' && str2 === 'password') {
      // Successful login
      alert('Welcome ');
      this.router.navigate(['/main-page-hr']);

    } else {
      // Invalid credentials
      const messageAlert = this.username+" Invid" + this.password;

      alert(messageAlert);
      
      // Display error message or perform any other action
    }
  }
  getErrorMessageUsername(){
    if (this.username.hasError('required')) {
      return 'กรุณากำหนด ชื่อบัญชีผู้ใช้งาน';
    }
    return this.username.hasError('username') ? 'Not a valid username' : '';

  }

  getErrorMessagePassword(){
    if (this.password.hasError('required')) {
      return 'กรุณากำหนด รหัสผ่าน';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';

  }
}
