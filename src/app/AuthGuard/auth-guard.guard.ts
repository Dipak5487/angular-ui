import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from 'src/Services/AuthServices/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthServiceService
) {}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const user = JSON.parse(localStorage.getItem('user')!);
  debugger
  if (user.succeeded) {
      return true;
  }
  // not logged in so redirect to login page with the return url
  this.router.navigate(['/userlogin'], { queryParams: { returnUrl: state.url }});
  return false;
}
  
}
