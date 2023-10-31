import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { StorageService } from 'src/app/shared/components/_services//storage.service';
import { AuthService } from 'src/app/shared/components/_services/auth.service';
import { EventBusService } from 'src/app/shared/components/_shared/event-bus.service';
import  {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  username?: string;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router
  ) {  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        this.router.navigate(['/'])
      },
      error: err => {
        console.log(err);
      }
    });
  }
  ngOnInit(): void { 
    const user = this.storageService.getUser();
    this.username = user.username;
   }
}
