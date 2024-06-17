import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import  {Router} from '@angular/router'
import { ServicesTestService } from 'src/app/services/services-test.service';
import { AuthService } from 'src/app/services/auth.service';

import { StorageService } from 'src/app/shared/components/_services//storage.service';
import { EventBusService } from 'src/app/shared/components/_shared/event-bus.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  credentials = {
    username: '',
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  alertMessage = '';


  constructor(public authService: AuthService, private storageService: StorageService,
              private router: Router ,private eventBusService: EventBusService,    ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  login(): void {
    this.authService.login(this.credentials).subscribe(
      response => {
        console.log('User logged in successfully', response);
        switch (response.role) {
          case 'HR':
            this.router.navigate(['/main-page-hr']);
            break;
          case 'IT':
            this.router.navigate(['/main-page-it']);
            break;
          case 'Head':
            this.router.navigate(['/main-page-head']);
            break;
          case 'Board':
            this.router.navigate(['/main-page-board']);
            break;
          case 'Employee':
            this.alertMessage = 'ไม่มีสิทธิ์เข้าใช้งาน ให้ใช้ได้แค่ Mobile App';
            break;
          default:
            this.router.navigate(['/']);
            break;
        }
      },
      error => {
        console.error('Login failed', error);
        alert('Login failed');
      }
    );
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
  reloadPage(): void {
    window.location.reload();
  }

}
