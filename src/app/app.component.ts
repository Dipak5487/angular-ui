import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../Services/apiservice.service';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/user.model';
import { AuthServiceService } from 'src/Services/AuthServices/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user?: userModel | null
  constructor(private service: ApiserviceService,
    private router: Router,
    private accountService: AuthServiceService) {
    this.accountService.user.subscribe(x => this.user = x)

  }
  title = 'angular-ui';
  token = '';
  sideBarOpen = true;
  isLogin = false;

  ngOnInit(): void {
    this.getToken();
  }

  async getToken() {
    var tokenModel = {
      emailid: 'dipakchauhan330@gmail.com',
      username: 'Dipak Chauhan',
      role: 'Admin'
    }
    await this.service.getToken(tokenModel).subscribe(token => {
      localStorage.setItem('app_token', token)
    })
  }

  logout() {
    this.accountService.logout();
  }
}
