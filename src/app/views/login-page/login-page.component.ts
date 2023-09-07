import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import  {Router} from '@angular/router'
import { ServicesTestService } from 'src/app/services/services-test.service';

import { StorageService } from 'src/app/shared/components/_services//storage.service';
import { AuthService } from 'src/app/shared/components/_services/auth.service';
import { EventBusService } from 'src/app/shared/components/_shared/event-bus.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthService, private storageService: StorageService,private router: Router ,private eventBusService: EventBusService,
    
    ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        if(this.roles[0]==="main-page-user"){
          alert("Can not use Web Only Mobile APP")
          this.logout()
          this.reloadPage()
        }else{
          alert(this.roles[0])
        this.router.navigate([this.roles[0]])
        }
        
        
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        alert("ออกจากระบบ")
        this.router.navigate(['/'])
      },
      error: err => {
        console.log(err);
      }
    });
  }
  
  reloadPage(): void {
    window.location.reload();
  }

}
