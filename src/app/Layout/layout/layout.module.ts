import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SidebarComponent } from '../Sidebar/sidebar/sidebar.component';
import { MenubarComponent } from '../Menu/menubar/menubar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CommonModule,
        LayoutRoutingModule,
        MatMenuModule,
        MatButtonModule

    ],
    declarations: [
        LayoutComponent,
        DashboardComponent,
        SidebarComponent,
        MenubarComponent
    ]
})
export class LayoutModule { }