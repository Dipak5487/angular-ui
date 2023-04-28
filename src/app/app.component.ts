import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../Services/apiservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    this.getToken();
  }
  title = 'angular-ui';
  token = '';
  sideBarOpen =true

  async getToken() {

    var tokenModel = {
      emailid: 'dipakchauhan330@gmail.com',
      username: 'Dipak Chauhan',
      role: 'Admin'
    }
    await this.service.getToken(tokenModel).subscribe(token => {
      console.log("Token is", token.toString())
      // this.token = token.toString();
       localStorage.setItem('app_token', token)
    })

  }

//   sideBarToggle()
//   {
//    this.sideBarOpen = !this.sideBarOpen;
//   }
// 
}
