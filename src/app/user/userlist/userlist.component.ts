import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { userModel } from './user.model';
import { ApiserviceService } from 'src/Services/apiservice.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private service: ApiserviceService) { }
  emp: any;
  UserList!: userModel[]
  table: boolean= true;
  yellow!: any;
  EnableAddEditUser: boolean = false;
  ModalTitle: string = '';

  ngOnInit(): void {
    // if (this.service.subsVar == undefined) {
    //   this.service.subsVar = this.service.invokeFirstComponentFunction.subscribe(() => {
    //     this.closeClick();
    //   });
    // }
    this.getUserList();
  }

  getUserList() {
    try {
     debugger
      this.service.getEmployeeList().subscribe(data => {
       
        if (data.length > 0) {

          this.UserList = data;
          this.table = true;
          console.log("data", this.UserList)
        } else {
          this.table = false;
          //this.yellow = true
          // setTimeout(() => {
          //   debugger
          //   if (this.UserList == null) {

          //     this.table = false;
          //     this.yellow = true
          //   } else {
          //     this.table = true;
          //     this.yellow = false
          //   }
          // }, 500);

        }
      });
    }
    catch (err) {
      console.log("Error catch", err)
    }
  }

  addUser() {
    this.emp = {
      Id: '0',
      Name: '',
      DOB: '',
      EmailId: '',
      Country: '',
      MobileNumber: ''
    }
    this.EnableAddEditUser = true;
    this.ModalTitle = 'Create here';
    console.log("AddUse", this.emp)

  }
  closeClick() {
    this.EnableAddEditUser = false;
    this.ModalTitle = '';
  }

}
