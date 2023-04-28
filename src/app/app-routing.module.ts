import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { UserRegiterComponent } from './login/user-regiter/user-regiter.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
  {path : 'user', component: UserComponent},
  {path : 'userlogin', component: UserLoginComponent},
  {path : 'userRegister',component: UserRegiterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
