import { Component, OnInit } from '@angular/core';
import { ServicesTestService } from 'src/app/services/services-test.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { Title } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { te } from 'date-fns/locale';
import { delay } from 'rxjs';
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
    departmentDetail: {
      role: '',
      salary: '',
      department: '',
    },
    status: {
      role: '',
      active: false
    },
    published: false
  };
  submitted = false;

  constructor(private tutorialService: ServicesTestService, private router: Router) { }
  ngOnInit(): void {
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




  saveTutorial(): void {
    const data = {
      username: this.tutorial.username,
      password: this.tutorial.password,
      firstname: this.tutorial.firstname,
      lastname: this.tutorial.lastname,
      departmentdetail: this.tutorial.departmentDetail,
      roledepart: this.tutorial.departmentDetail?.role,
      salarydepart: this.tutorial.departmentDetail?.salary,
      departmentdepart: this.tutorial.departmentDetail?.department,
      status: this.tutorial.status,
      rolestatus: this.tutorial.status?.role,
      activestatus: this.tutorial.status?.active

    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          if (this.submitted == true) {
            this.router.navigate(['/']);
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
      departmentdetail: '',
      roledepart: '',
      salarydepart: '',
      departmentdepart: '',
      rolestatus: '',
      activestatus: '',
      published: false
    };
  }

}
