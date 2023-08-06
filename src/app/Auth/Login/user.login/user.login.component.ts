import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { AuthServiceService } from 'src/Services/AuthServices/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TosterService } from 'src/Services/TosterServices/tosterService';

@Component({
  selector: 'app-user-login',
  templateUrl: './user.login.component.html',
  styleUrls: ['./user.login.component.css'],
})
export class UserLoginComponent implements OnInit {

  constructor(
    private auth: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private toster: TosterService) {
  }
  username: any;
  password: any;

  ngOnInit() { }

  async login() {
    var userLogIn = {
      username: this.username,
      password: this.password
    }
      ; (await this.auth.userLogin(userLogIn)).pipe(first())
        .subscribe({
          next: (user) => {
            if (user.succeeded) {
              this.toster.showSuccess("Login Successfully !")
              this.router.navigate(['/home']);
            } else {
              this.toster.showErrors("Invalid email and password!")
            }
          },
          error: error => {
            console.log("Error Message", error)
          }
        });

  }

  register() {
    try {
      let result = this.auth.userRegister({}).subscribe((data: any) => {
        console.log(data);
      });
    }
    catch (error: any) {
      alert(error)
    }
  }
}
