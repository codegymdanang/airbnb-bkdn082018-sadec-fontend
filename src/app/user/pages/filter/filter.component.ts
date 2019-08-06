import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  danhSachKhoangTien;
  soLuongPhong;
  
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }


  getDanhSachKhoangTien() {
    return this.http.get('/assets/khoang-gia-tien.json');
  }
  
  getSoLuongPhong() {
    return this.http.get('/assets/so-luong-phong.json');
  }

  ngOnInit() {
    this.danhSachKhoangTien = this.getDanhSachKhoangTien();
      this.soLuongPhong = this.getSoLuongPhong();
  }

}
