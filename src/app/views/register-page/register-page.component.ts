import { Component, OnInit } from '@angular/core';
import { ServicesTestService } from 'src/app/services/services-test.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { Title } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
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

  constructor(private tutorialService: ServicesTestService) { }
  ngOnInit(): void {
  }

  //fname
  firstname = new FormControl('', [Validators.required, Validators.nullValidator]);
    //lname
    lastname = new FormControl('', [Validators.required, Validators.nullValidator]);
    //username
    username = new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(10)]);
  getErrorMessage() {
    if (this.firstname.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.lastname.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.username.hasError('minLength')) {
      return 'You must enter a 4 cha';
    }
    

    return this.firstname.hasError('firstname') ? 'Not a valid firstname' : '';
    return this.lastname.hasError('lastname') ? 'Not a valid lastname' : '';
  };

  


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
