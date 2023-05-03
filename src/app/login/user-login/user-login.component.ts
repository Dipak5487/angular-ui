import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthServiceService } from 'src/Services/AuthServices/auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UserRegiterComponent } from '../user-regiter/user-regiter.component';
import { AppComponent } from 'src/app/app.component';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, MinLengthValidator, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AlertService } from 'src/Services/Alert/Alertservice'
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @Input() error?: string | null;
  form: any
  loading = false;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: AuthServiceService,
    public dialog: MatDialog,
    private appComponet: AppComponent,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }


  matcher = new MyErrorStateMatcher();

  ngOnInit() {

    this.form = this.formBuilder.group({
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  };


  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    console.log("values is", this.f.emailFormControl)
    console.log(this.f.emailFormControl.value)
    var authModel = {
      email: this.f.emailFormControl.value,
      password: this.f.passwordFormControl.value,
      rememverMe: true
    }
    debugger
    console.log(authModel)
    this.loginService.userLogin(authModel)
      .pipe(first()).subscribe({
        next: (data) => {
          if (data.succeeded) {
            this.loading = false;
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
            this.router.navigate(["/"]);
          }
          else {
            this.loading = false;
            this.alertService.warn("Invalid User Name or Password")
            this.router.navigate(["/userlogin"])
          }
        },
        error: error => {
          this.alertService.alert(error)
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

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
