import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/Services/apiservice.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  @Input()
  emp: any;
  Name = "";
  DOB = "";
  EmailId = "";
  Country = "";
  MobileNumber = "";
  //PhotoFilePath = "";
  DepartmentList: any = [];


  ngOnInit(): void {
    this.loadEmployeeList();
  }

  loadEmployeeList() {

    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentList = data;

      console.log("Edit call",this.emp)
      this.Name = this.emp.name;
      this.DOB = this.emp.dob;
      this.EmailId = this.emp.emailId;
      this.Country = this.emp.country;
      this.MobileNumber = this.emp.mobileNumber

      //this.PhotoFileName = this.emp.PhotoFileName;
      //this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    });
  }

  addEmployee() {
    var val = {
      Name: this.Name,
      DOB: this.DOB,
      EmailId: this.EmailId,
      Country: this.Country,
      MobileNumber: this.MobileNumber
      //PhotoFileName: this.PhotoFileName
    };

    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
    location.reload();
  }

  updateEmployee() {
    var val = {
      Id: this.emp.id,
      Name: this.Name,
      DOB: this.DOB,
      EmailId: this.EmailId,
      Country: this.Country,
      MobileNumber: this.MobileNumber
      //PhotoFileName: this.PhotoFileName
    };

    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }


  // uploadPhoto(event: any) {
  //   var file = event.target.files[0];
  //   const formData: FormData = new FormData();
  //   formData.append('file', file, file.name);

  //   this.service.uploadPhoto(formData).subscribe((data: any) => {
  //     this.PhotoFileName = data.toString();
  //     this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
  //   })
  // }
}