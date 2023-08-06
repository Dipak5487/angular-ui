import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';
import { TosterService } from 'src/Services/TosterServices/tosterService';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toster: TosterService
  ) { }

  LogOut() {
    debugger
    localStorage.removeItem("user")
    localStorage.clear();
    this.toster.showWarning("Logout succesfully!")
    this.router.navigate(['/login']);
  }

}
