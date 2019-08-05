import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { endpoint, handleError } from 'src/app/shared/common/common';
import { Home } from '../models/home';
import { catchError } from 'rxjs/operators';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  addImages(images: Image[]): Observable<any> {
    return this.http.post(`${endpoint}/hinh_anh_nha`, JSON.stringify(images[0]))
            .pipe(catchError(handleError))
  }
}
