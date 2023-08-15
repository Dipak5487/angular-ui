import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';
import { TosterService } from 'src/Services/TosterServices/tosterService';
import { ApiserviceService } from 'src/Services/apiservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit  {
  displayedColumns: string[] = ['id', 'name', 'dob', 'emailId','country','mobileNumber'];
  dataSource : any;
  constructor(
    private apiService: ApiserviceService,
    private tosterService: TosterService
  ) {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.apiService.getEmployeeList().pipe(first())
      .subscribe({
        next: (employeeList) => {
          this.dataSource  = new MatTableDataSource(employeeList);
          this.dataSource.paginator = this.paginator;
        },
        error: error => {
          this.tosterService.showErrors(error)
        }
      }
      );
  }
}
