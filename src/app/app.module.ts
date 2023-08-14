import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiserviceService } from '../Services/apiservice.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LayoutComponent } from './Layout/layout/layout.component';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from './loading/loading.service';
import { LoadingInterceptor } from './loading/LoadingInterceptor';
import { ToastrModule } from 'ngx-toastr';
import { TosterService } from 'src/Services/TosterServices/tosterService';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    IonicModule.forRoot(),
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    MatToolbarModule
 
  ],
  providers: [
    ApiserviceService,{ provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy },
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    TosterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
