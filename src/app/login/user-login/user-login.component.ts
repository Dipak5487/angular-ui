import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthServiceService } from 'src/Services/AuthServices/auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UserRegiterComponent } from '../user-regiter/user-regiter.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  form: any
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: AuthServiceService,
    public dialog: MatDialog,
    private appComponet: AppComponent
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    var authModel = {
      email: this.f.username.value,
      password: this.f.password.value,
      rememverMe: true
    }

    console.log(authModel)
    this.loginService.userLogin(authModel)
      .pipe(first()).subscribe({
        next: (data) => {
          debugger
          if (data.succeeded) {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
            
            this.router.navigate(["/employee"]);
          }
          else {
            this.router.navigate(["/userlogin"])
          }
        },
        error: error => {
          this.loading = false;
          this.router.navigate(["/userlogin"])
        }
      });
  }

  openDialogRegister() {
    const dialogRef = this.dialog.open(UserRegiterComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
