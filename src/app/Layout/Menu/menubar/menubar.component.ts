import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';
import { TosterService } from 'src/Services/TosterServices/tosterService';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsExampleDialogComponent } from './dialog-animations-example-dialog/dialog-animations-example-dialog.component';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],

})
export class MenubarComponent {
  isUserLogin = false
  user: any
  name=''
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toster: TosterService,
    public dialog: MatDialog
  ) {

    this.user = JSON.parse(localStorage.getItem('signInResult') || "");
    let userName = localStorage.getItem("userEmail") || "";
    if (this.user != null && this.user.succeeded) {
      this.isUserLogin = this.user.succeeded
      this.name = userName
    }
  }

  LogOut() {
    localStorage.removeItem("signInResult")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("token")
    localStorage.clear();
    this.toster.showWarning("Logout succesfully!")
    this.router.navigate(['/login']);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  closeDialog(){
    console.log("close");
    this.dialog.closeAll();
  }

}
