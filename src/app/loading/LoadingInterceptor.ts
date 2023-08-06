import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, defer, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { LoadingService, LoadingOverlayRef } from './loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loadingRef: LoadingOverlayRef;

    // Using RxJS 'defer' to ensure the loading overlay is opened asynchronously
    return defer(() => {
      loadingRef = this.loadingService.open();
      return next.handle(req);
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error here

        return throwError(error);
      }),
      finalize(() => {
        if (loadingRef) {
          loadingRef.close();
        }
      })
    );
  }
}