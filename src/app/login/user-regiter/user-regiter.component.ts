import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthServiceService } from 'src/Services/AuthServices/auth-service.service';


@Component({
  selector: 'app-user-regiter',
  templateUrl: './user-regiter.component.html',
  styleUrls: ['./user-regiter.component.css']
})
export class UserRegiterComponent implements OnInit {
  form: any;
  loading = false;
  submitted = false;
  constructor(private loginService: AuthServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,){}

    ngOnInit() {
      this.form = this.formBuilder.group({
        emailId: ['', Validators.required,Validators.email],
        password: ['', Validators.required,Validators.minLength(8)],
        confirmPassword: ['', Validators.required]
      });
  }
  

  get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
       // this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        var userRegisterModel ={
          email : this.f.emailId.value,
          password: this.f.password.value,
          confirmPassword :this.f.confirmPassword.value,
        }
debugger
        console.log(userRegisterModel)
        this.loginService.userRegister(userRegisterModel)
            .pipe(first())
            .subscribe({
                next: () => {
                    //this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['/userlogin'], { relativeTo: this.route });
                },
                error: error => {
                  console.log(error)
                    //this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}
