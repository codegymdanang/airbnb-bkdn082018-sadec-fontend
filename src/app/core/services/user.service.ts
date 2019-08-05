import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { endpoint, handleError, httpOptions } from 'src/app/shared/common/common';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private returnUser: User;

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${endpoint}/nguoi_dung`, JSON.stringify(user), httpOptions)
            .pipe(catchError(handleError));
  }

  getUserById(id: number):Observable<User> {
    return this.http.get<User>(`${endpoint}/nguoi_dung/${id}`)
            .pipe(catchError(handleError));
  }

  checkUserIsExist(tenNguoiDung: string): Observable<Boolean>{
    return this.http.get<Boolean>(`${endpoint}/kiem_tra_nguoi_dung?name=${tenNguoiDung}`, httpOptions)
            .pipe(catchError(handleError));
  }

  getUserByName(tenNguoiDung: string):Observable<User> {
    return this.http.get<User>(`${endpoint}/nguoi_dung?name=${tenNguoiDung}`, httpOptions)
            .pipe(catchError(handleError));
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(`${endpoint}/nguoi_dung/${user.id}/cap_nhap`, user, httpOptions)
                .pipe(catchError(handleError))
  }
}
