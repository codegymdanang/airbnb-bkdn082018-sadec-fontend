import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { endpoint, httpOptions } from 'src/app/shared/common/common';
import { Home } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getHomes(): Observable<Home[]> {
    return this.http.get<Home[]>(`${endpoint}/nha`);
  }

  getHome(id: number): Observable<Home> {
    return this.http.get<Home>(`${endpoint}/nha/${id}`);
  }
}