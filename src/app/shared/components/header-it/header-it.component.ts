import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/components/_services//storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { EventBusService } from 'src/app/shared/components/_shared/event-bus.service';
import  {Router} from '@angular/router'


@Component({
  selector: 'app-header-it',
  templateUrl: './header-it.component.html',
  styleUrls: ['./header-it.component.scss']
})
export class HeaderItComponent implements OnInit {
  displayUi =false;
  showFiller = false;
  username?: string;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.username = user.username;
  }
  

  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
