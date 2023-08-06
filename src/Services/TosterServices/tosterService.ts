import { Injectable, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class TosterService {
    constructor(private toastr: ToastrService) { }

    showSuccess(successMessage: any) {
        this.toastr.success(successMessage);
    }

    showErrors(errorMessage: any) {
        this.toastr.error(errorMessage);
    }

    showWarning(warningMessage: any) {
        this.toastr.warning(warningMessage);
    }
}