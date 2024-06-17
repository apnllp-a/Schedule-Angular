import {  Component,} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  [x: string]: any;
  title = 'schedule-angular';

  constructor(public  authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}