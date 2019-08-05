import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, concat } from 'rxjs'
import { endpoint, handleError, httpOptions } from 'src/app/shared/common/common';
import { Home } from '../models/home';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  upload(formData: FormData): Observable<any> {
      return this.http.post(`${endpoint}/upload_hinh_anh`, formData)
              .pipe(catchError(handleError));
  }
}
