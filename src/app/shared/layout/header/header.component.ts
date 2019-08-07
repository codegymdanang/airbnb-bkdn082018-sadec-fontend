import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() { }

   isLoggedIn() {
    if (!this.authenticationService.isLoggedIn()) return false;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser.username;
    return true;
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

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}