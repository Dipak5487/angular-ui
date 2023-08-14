import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { TosterService } from 'src/Services/TosterServices/tosterService';
import { ApiserviceService } from 'src/Services/apiservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'dob', 'emailId','country','mobileNumber'];
  dataSource : any;
  constructor(
    private apiService: ApiserviceService,
    private tosterService: TosterService
  ) {

  }
  ngOnInit(): void {
    this.apiService.getEmployeeList().pipe(first())
      .subscribe({
        next: (employeeList) => {
          this.dataSource  = employeeList;
        },
        error: error => {
          this.tosterService.showErrors(error)
        }
      }
      );
  }
}
