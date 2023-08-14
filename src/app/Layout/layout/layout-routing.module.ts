import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuardGuard } from '../../AuthGuard/auth-guard.guard';
import { MatMenu } from '@angular/material/menu';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenubarComponent } from '../Menu/menubar/menubar.component';
import { SidebarComponent } from '../Sidebar/sidebar/sidebar.component';
import { UserListComponent } from 'src/app/User/user-list/user-list.component';
import { EmployeeListComponent } from 'src/app/Components/employee-list/employee-list.component';

//const menubar = ()=> import('src/app/Layout/Menu/menubar/menubar.module').then(x=>x.MenuBarModule)
const routes: Routes = [
    {
        path: '', component: LayoutComponent, canActivate: [AuthGuardGuard],
       
        children: [
            { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuardGuard] },
            { path: 'menubar', component: MenubarComponent,canActivate:[AuthGuardGuard] },
            { path: 'sidebar', component: SidebarComponent,canActivate:[AuthGuardGuard] },
            {path : 'userlist' ,component: UserListComponent,canActivate:[AuthGuardGuard] },
            {path : 'employeelist' ,component: EmployeeListComponent,canActivate:[AuthGuardGuard] }

            
        ]
    },
    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }