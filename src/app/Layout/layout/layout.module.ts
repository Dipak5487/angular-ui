import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SidebarComponent } from '../Sidebar/sidebar/sidebar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MenubarComponent } from '../Menu/menubar/menubar.component';
import { UserListComponent } from 'src/app/User/user-list/user-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule}  from '@angular/material/checkbox'
import {CdkTableModule} from '@angular/cdk/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeListComponent } from 'src/app/Components/employee-list/employee-list.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { FooterComponent } from '../footer/footer.component';
import { MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
    imports: [
        
        MatDialogModule,
        CommonModule,
        ReactiveFormsModule,
        CommonModule,
        LayoutRoutingModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatExpansionModule,
        MatCheckboxModule,
        CdkTableModule,
        MatTableModule,
        MatSidenavModule, 
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        FlexLayoutModule,
        MatPaginatorModule,
      

        
    ],
    declarations: [
        LayoutComponent,
        DashboardComponent,
        SidebarComponent,
        MenubarComponent,
        UserListComponent,
        EmployeeListComponent,
        FooterComponent
    ]
})
export class LayoutModule { }