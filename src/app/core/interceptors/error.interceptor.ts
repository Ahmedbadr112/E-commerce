import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const _Toast = inject(ToastrService);
  return next(req).pipe(
    catchError((err) => {
      console.log('interceptor', err.error.message);
      _Toast.error(err.error.message, 'freshCart');
      return throwError(() => err);
    })
  );
};
