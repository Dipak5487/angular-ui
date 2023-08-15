import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  readonly login = "https://localhost:44396/api/Authrization/";
  private userSubject: BehaviorSubject<any | null>;
  public user: Observable<any | null>;
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  async userLogin(userLoginModel: any) {
    var userLogIn = {
      email: userLoginModel.username,
      password: userLoginModel.password
    };

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return await this.http.post<any>(this.login + 'GetToken', userLogIn, httpOptions)
      .pipe(map(user => {
        if(user !=null && user.signInResult.succeeded){
        localStorage.setItem('id', user.id);
        localStorage.setItem('userEmail', user.username);
        localStorage.setItem('access_token', user.token);
        localStorage.setItem('signInResult', JSON.stringify(user.signInResult));

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
