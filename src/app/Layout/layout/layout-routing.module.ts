import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuardGuard } from '../../AuthGuard/auth-guard.guard';
import { MatMenu } from '@angular/material/menu';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenubarComponent } from '../Menu/menubar/menubar.component';
import { SidebarComponent } from '../Sidebar/sidebar/sidebar.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, canActivate: [AuthGuardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuardGuard] },
            { path: 'menubar', component: MenubarComponent,canActivate:[AuthGuardGuard] },
            { path: 'sidebar', component: SidebarComponent,canActivate:[AuthGuardGuard] }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }