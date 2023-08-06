import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:44396/api/User/';
  readonly photoUrl = "http://localhost:50306/Photos/";
  readonly authUrl = "https://localhost:44396/api/Authrization/"
  token: any = '';
  constructor(private http: HttpClient) {
  }

  

  // Department
  getDepartmentList(): Observable<any[]> {

    this.token = localStorage.getItem("app_token")
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    const requestOptions = { headers: headers };
    return this.http.get<any[]>(this.apiUrl + 'get-all',requestOptions);

  }

  addDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'department/AddDepartment', dept, httpOptions);
  }

  updateDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'department/UpdateDepartment/', dept, httpOptions);
  }

  deleteDepartment(deptId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'department/DeleteDepartment/' + deptId, httpOptions);
  }

  getEmployeeList() {
    this.token = localStorage.getItem("app_token")
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    const requestOptions = { headers: headers };
    return this.http.get<any[]>(this.apiUrl + 'get-all', requestOptions);
  }

  getToken(tokenModel: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

    return this.http.post<string>(this.authUrl + 'GetToken', tokenModel, { ...httpOptions, responseType: 'text' as 'json' });
  }

  addEmployee(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'user-create', emp, httpOptions);
  }

  updateEmployee(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'update', emp, httpOptions);
  }

  deleteEmployee(empId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + empId, httpOptions);
  }

  uploadPhoto(photo: any) {
    return this.http.post(this.apiUrl + 'employee/savefile', photo);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'get-all');
  }
}