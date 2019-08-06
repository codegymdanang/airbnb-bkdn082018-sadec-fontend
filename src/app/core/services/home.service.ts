import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { endpoint, handleError, httpOptions } from 'src/app/shared/common/common';
import { Home } from '../models/home';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getHomes(): Observable<Home[]> {
    return this.http.get<Home[]>(`${endpoint}/nha`, httpOptions)
      .pipe(catchError(handleError));
  }

  getHome(id: number): Observable<Home> {
    return this.http.get<Home>(`${endpoint}/nha/${id}`, httpOptions)
      .pipe(catchError(handleError));
  }

  addHome(home: Home): Observable<Home> {
    return this.http.post<Home>(`${endpoint}/nha`,JSON.stringify(home), httpOptions)
      .pipe(catchError(handleError));
  }

  getHomesByBedRoomNumber(number): Observable<Home[]> {
    return this.http.get<Home[]>(`${endpoint}/nha/findBySoPhongNgu/${number}`, httpOptions)
      .pipe(catchError(handleError));
  }

  getHomesByBathRoomNumber(number): Observable<Home[]> {
    return this.http.get<Home[]>(`${endpoint}/nha/findBySoPhongTam/${number}`, httpOptions)
      .pipe(catchError(handleError));
  }

  getHomesByPrice(min, max): Observable<Home[]> {
    return this.http.get<Home[]>(`${endpoint}/nha/findByGiaPhongTheoDem?min=${min}&max=${max}`, httpOptions)
      .pipe(catchError(handleError));
  }
  
}