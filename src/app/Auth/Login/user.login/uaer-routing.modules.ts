import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user.login.component';
import { UserregisterComponent } from '../../Register/userregister/userregister.component';

const routes: Routes = [
    {
        path: '', component: UserLoginComponent,
        children: [
            { path: 'register', component: UserregisterComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule { }