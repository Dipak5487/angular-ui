import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  readonly login = "https://localhost:44396/api/Account/"
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,) { }

  userLogin(userLoginModel: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.login + 'log-in', userLoginModel, httpOptions)
    .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isUserActive', JSON.stringify(user.succeeded));
        return user;
    }));
  }

  userRegister(userLoginModel: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.login + 'register', userLoginModel, httpOptions);
  }
}
