import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser.accessToken);
   }

  isLogin() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.accessToken) return true;
    else return false;
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
    // this.isLogin = false;
  }
}