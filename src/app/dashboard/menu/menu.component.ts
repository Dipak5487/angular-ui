import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserLoginComponent } from 'src/app/login/user-login/user-login.component';
import { UserRegiterComponent } from 'src/app/login/user-regiter/user-regiter.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  constructor(public dialog: MatDialog,
    private router: Router,) { }
    isLogout = true;
  ngOnInit(): void {
   if(localStorage.getItem("isUserActive"))
   {
    debugger
    this.isLogout = false;
   }
  }



  openDialogLogin() {
    const dialogRef = this.dialog.open(UserLoginComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialogRegister() {
    const dialogRef = this.dialog.open(UserRegiterComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('isUserActive');
    localStorage.removeItem('app_token');
    this.isLogout = true;
    this.router.navigate(['/userlogin']);
  }
}

