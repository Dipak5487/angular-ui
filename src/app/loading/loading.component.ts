import { Component } from '@angular/core';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {
  showSpinner = true;


  simulateAsyncOperation() {
    setTimeout(() => {
      this.showSpinner = false; // Hide the spinner when the operation is complete
    }, 3000); // Change the delay as needed
  }

  constructor() {
    this.simulateAsyncOperation();
  }
}
