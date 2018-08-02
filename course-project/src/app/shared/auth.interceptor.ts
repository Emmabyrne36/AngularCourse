import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();
        console.log('Intercepted: ' + req);
        const copiedReq = req.clone({params: req.params.set('auth', token)}); // Gives copy of incomming request - allowing you to edit it.
        return next.handle(copiedReq);
    }
}
