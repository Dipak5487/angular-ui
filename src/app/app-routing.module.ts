import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './AuthGuard/auth-guard.guard';

const accountModule = () => import('src/app/Auth/Login/user.login/user.module').then(x => x.UserModule);
const layoutModule =()=> import('./Layout/layout/layout.module').then(x=>x.LayoutModule)

const routes: Routes = [
  {path : '', loadChildren:accountModule},
  {path : "login",loadChildren : accountModule},
  {path : "home",loadChildren : layoutModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
