import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  hide = true;
  user = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    department: ''
  };

  submitted = false;
  h3_alert: string;
  p_alert: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  // Form controls for validation
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]);
  username = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]);
  department = new FormControl('', [Validators.required]);

  getErrorMessageFirstName() {
    if (this.firstName.hasError('required')) {
      return 'กรุณากรอก ชื่อ';
    }
    return this.firstName.hasError('firstName') ? 'Not a valid first name' : '';
  }

  getErrorMessageLastName() {
    if (this.lastName.hasError('required')) {
      return 'กรุณากรอก นามสกุล';
    }
    return this.lastName.hasError('lastName') ? 'Not a valid last name' : '';
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

  getErrorMessageDepartment() {
    if (this.department.hasError('required')) {
      return 'กรุณากรอก แผนก';
    }
    return this.department.hasError('department') ? 'Not a valid department' : '';
  }

  saveUser(): void {
    const data = {
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      password: this.user.password,
      department: this.user.department
    };

    this.authService.register(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          if (this.submitted) {
            console.log(res + ' success');
            this.h3_alert = 'สมัครสมาชิกสำเร็จ';
            this.p_alert = 'ไปหน้า Login เพื่อเข้าสู่ระบบ';
          }
        },
        error: (e) => console.error(e)
      });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      department: ''
    };
  }
}
