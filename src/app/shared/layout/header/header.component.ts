import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myStyles = {'color': 'white'}

  onMouseOver(e: any){
    if (e) {
      e.style['color'] = '#8da7c0';
    }
  };

  onMouseMove(e: any){
    if (e) {
      e.style['color'] = 'white';
    } 
  };

  onClick(e: any) {
    if (e) {
      e.style['background-color'] = '#1976d2';
    }
  }
}
