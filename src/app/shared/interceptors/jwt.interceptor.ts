import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../../environments/environment';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.startsWith(environment.apiUrl)){
      request = request.clone(
        {
          setHeaders: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2MzQxNjQ1NTksImV4cCI6MTYzNDE2ODE1OX0.2m_uSeqyCBgmV1pEM0PgEFDlGH90Uq8GAQ_fteShGhM",
          }
        }
      );
    }
    return next.handle(request).pipe(catchError(err=>{
      console.log(err);
      if(err.status == '401'  || err.status == '403'){ // or [401,403].indexOf(err.status) != -1
          this.router.navigate(['../auth/login']);
      }
      return throwError(err);
    }));
    //pipe بعد ما تبعت
  }
}
