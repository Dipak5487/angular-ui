import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { userModel } from 'src/app/models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  readonly login = "https://localhost:44396/api/Account/";
  private userSubject: BehaviorSubject<userModel | null>;
  public user: Observable<userModel | null>;
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  userLogin(userLoginModel: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.login + 'log-in', userLoginModel, httpOptions)
      .pipe(map(user => {
        if (user.succeeded) {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        }
        return user;
      }));
  }

  userRegister(userLoginModel: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.login + 'register', userLoginModel, httpOptions);
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/userlogin']);
  }
}
