import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const userRole = this.authService.getRole();

    if (!this.authService.isLoggedIn || userRole !== expectedRole) {
        this.redirectToRolePage(userRole);
      return false;
    }
    return true;
  }
  redirectToRolePage(role: string | null) {
    switch (role) {
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
        // Display an alert or redirect to a mobile app link
        alert('ไม่มีสิทธิ์เข้าใช้งาน ให้ใช้ได้แค่ Mobile App');
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }
   }
}
