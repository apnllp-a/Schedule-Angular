import { Component, OnInit } from '@angular/core';
import { ServicesTestService } from 'src/app/services/services-test.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { te } from 'date-fns/locale';
import { UserAllService } from '../../../app/services/user/user-all.service';
import { delay } from 'rxjs';
import { UserAll } from 'src/app/models/user/user-all.model';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  hide = true;
  tutorial: Tutorial = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    position: '',
    published: false
  };
  submitted = false;
  user_all: UserAll[];


  h3_alert:string;
  p_alert:string;


  constructor( private userAllService: UserAllService,private tutorialService: ServicesTestService, private router: Router) { }
  ngOnInit(): void {
    this.retrieveUserAlls()
  }

  //fname
  firstname = new FormControl('', [Validators.required, Validators.nullValidator]);
  //lname
  lastname = new FormControl('', [Validators.required, Validators.nullValidator]);
  //password
  password = new FormControl('', [Validators.required, Validators.nullValidator]);
  //username
  username = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]);
  getErrorMessageFirstname() {
    if (this.firstname.hasError('required')) {
      return 'กรุณากรอก ชื่อ';
    }
    return this.firstname.hasError('firstname') ? 'Not a valid firstname' : '';
  };

  getErrorMessageLastname() {
    if (this.lastname.hasError('required')) {
      return 'กรุณากรอก นามสกุล';
    }
    return this.lastname.hasError('lastname') ? 'Not a valid lastname' : '';

  }

  getErrorMessageUsername() {
    if (this.username.hasError('required')) {
      return 'กรุณากำหนด ชื่อบัญชีผู้ใช้งาน';
    }
    return this.username.hasError('username') ? 'Not a valid username' : '';

  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'กรุณากำหนด รหัสผ่าน';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';

  }
  retrieveUserAlls(): void {
    this.userAllService.getAll()
      .subscribe({
        next: (data) => {
          this.user_all = data;
          console.log(this.user_all)

        },
        error: (e) => console.error(e)
      });
  }



  saveTutorial(): void {
    const data = {
      username: this.tutorial.username,
      password: this.tutorial.password,
      firstname: this.tutorial.firstname,
      lastname: this.tutorial.lastname,
      position: this.tutorial.position 

    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          if (this.submitted == true) {
            // this.router.navigate(['/']);
           console.log(res + 'success')
           this.h3_alert = 'สมัครสมาชิกสำเร็จ'
           this.p_alert = 'ไปหน้า Login เพื่อเข้าสู่ระบบ'
          //  กรุณาตรวจสอบข้อมูลอีกครั้ง
          }
        },
        error: (e) => console.error(e)
      });


  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      position: " member",
      published: false
      
    };
  }

}
