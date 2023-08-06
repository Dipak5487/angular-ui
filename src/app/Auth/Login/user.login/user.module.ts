import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './uaer-routing.modules';
import { UserLoginComponent } from './user.login.component';
import { UserregisterComponent } from '../../Register/userregister/userregister.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRoutingModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FormsModule
    
    ],
    declarations: [
        UserLoginComponent,
        UserregisterComponent
    ]
})
export class UserModule { }