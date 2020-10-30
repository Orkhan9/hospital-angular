import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          //console.log(error.error.title)
          return throwError(error.error.title);
        }
        if (error instanceof HttpErrorResponse) {
          const applicationError = error.headers.get('Application-Error');
          if (applicationError) {
            console.error(applicationError);
            return throwError(applicationError);
          }
          let serverError = error.error;
          let modalStateErrors = '';
          if (serverError && typeof serverError === 'object') {
            serverError = error.error.errors;
            for (const key in serverError) {
              if (serverError[key]) {
                modalStateErrors += serverError[key] + '\n';
              }
            }
          }
          return throwError(modalStateErrors || serverError || 'Server Error');
        }
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
