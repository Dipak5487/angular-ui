import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  readonly login = "https://localhost:44396/api/Account/"
  constructor(private http: HttpClient) { }

  userLogin(userLoginModel: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.login + 'log-in', userLoginModel, httpOptions);
  }
  userRegister(userLoginModel: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.login + 'register', userLoginModel, httpOptions);
  }
}
