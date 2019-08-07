import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { endpoint, handleError, httpOptions } from 'src/app/shared/common/common';
import { map, catchError } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private htpp: HttpClient) { }

  getToken() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser === null) return null;
    if (currentUser.accessToken === undefined) return null;
    return currentUser.accessToken;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;
    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  isLoggedIn(): boolean {
    // alert(this.isTokenExpired())
    return !this.isTokenExpired();
  }

  getUser(): Observable<User> {
    const decoded = jwt_decode(this.getToken());
    const id = decoded.sub;
    return this.htpp.get<User>(`${endpoint}/nguoi_dung/${id}`, httpOptions)
            .pipe(catchError(handleError));
  }

  login(username: string, password: string): Observable<{accessToken: string, tokenType:string, username: string}>{
      return this.htpp.post<{accessToken: string, tokenType:string, username: string}>(`${endpoint}/login`, {username: username, password: password }, httpOptions)
      .pipe(map(user => {
          if (user && user.accessToken) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        }));
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
