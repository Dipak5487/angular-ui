import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/Services/apiservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private service: ApiserviceService) { }
  ngOnInit(): void {

  }
}
