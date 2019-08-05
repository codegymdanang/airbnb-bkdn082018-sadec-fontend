import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private authService: AuthenticationService;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.accessToken) {
            request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${currentUser.accessToken}`),
            });
        } 
        return next.handle(request);
    }
}