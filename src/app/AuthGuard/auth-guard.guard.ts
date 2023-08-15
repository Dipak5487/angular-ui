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
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger
    const user = JSON.parse(localStorage.getItem('signInResult') || "");
    if (user != null && user != undefined && user.succeeded) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  
    
    localStorage.clear();
    return false;
  }

}
