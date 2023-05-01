import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { UserRegiterComponent } from './login/user-regiter/user-regiter.component';
import { AuthGuardGuard } from './AuthGuard/auth-guard.guard';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent,canActivate: [AuthGuardGuard] },
  { path: 'department', component: DepartmentComponent ,canActivate: [AuthGuardGuard]},
  {path : 'user', component: UserComponent,canActivate: [AuthGuardGuard]},
  {path : 'userlogin', component: UserLoginComponent},
  {path : 'userRegister',component: UserRegiterComponent},  
  {path : '', component : AppComponent,canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
