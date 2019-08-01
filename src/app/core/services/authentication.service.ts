import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { endpoint, httpOptions } from 'src/app/shared/common/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private htpp: HttpClient) { }

  login(username: string, password: string): Observable<{accessToken: string, tokenType:string}>{
      return this.htpp.post<{accessToken: string, tokenType:string}>(`${endpoint}/login`, {username: username, password: password }, httpOptions)
      .pipe(map(user => {
          if (user && user.accessToken) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        }
      ));
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
