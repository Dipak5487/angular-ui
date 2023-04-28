import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/Services/apiservice.service';
import { UserlistComponent } from '../userlist/userlist.component';


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  constructor(private service: ApiserviceService,) {
  }
  @Input()
  emp: any;
  Name: string = '';
  DOB: string = '';
  EmailId: string = '';
  Country: string = ''
  MobileNumber: string = ''
  ngOnInit(): void {
    //let myCompOneObj = new UserlistComponent(this.service);
  }
  


  addEmployee() {
    var item = {
      Name: this.Name,
      DOB: this.DOB,
      EmailId: this.EmailId,
      Country: this.Country,
      MobileNumber: this.MobileNumber
    }
    this.service.addEmployee(item).subscribe(response => {
      if (response === 1) {
        
        
        alert("Recod Created Succefully")
        

      } else {
        
       
        alert("Faild to Insert",)

      }
     location.reload();

    })
  }
  updateEmployee() {

  }
}
