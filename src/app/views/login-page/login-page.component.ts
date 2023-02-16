import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesTestService } from 'src/app/services/services-test.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  constructor(private tutorialService: ServicesTestService, private router: Router) { }

  ngOnInit(): void {
  }

  //username
  username = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]);
  //password
  password = new FormControl('', [Validators.required, Validators.nullValidator]);
  
  
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
