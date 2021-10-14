import { JwtInterceptor } from './jwt.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi:true,
  },

  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi:true,
  },
];
