import { Injectable } from '@angular/core';
import { 
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/index';
import { tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Set request Authorization header
    const authReq = req.clone({
      headers: new HttpHeaders().set(
        'Authorization', `Bearer ${localStorage.getItem('access_token')}`
      )
    });

    // Send the new authorized request
    return next.handle(authReq)
      .pipe(
        // Must use arrow syntax in order to preserve "this"
        (res: any) => { this._onNext(res); return res; },
        (error: any) => { this._onError(error); return error; }
      );
  }

  // Cloned request sent with authorization header
  private _onNext(res) {
    console.log('interceptor res: ', res);
    if (res instanceof HttpResponse) {
      console.log(`Sent an authorized HTTP request with status ${res.status}: ${res.statusText}`);
    }
  }

  // Handle errors
  private _onError(error) {
    console.log('interceptor error: ', error);
    if (error instanceof HttpErrorResponse) {
      const errMsg = error.message;
      if (error.status === 401 || errMsg.indexOf('No JWT') > -1 || errMsg.indexOf('Unauthorized') > -1) {
        this.router.navigate(['/login']);
      }
    }
  }
}
