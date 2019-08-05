import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import { Home } from 'src/app/core/models/home';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  homes: Home[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
      this.getHomes();
  }

  getHomes() {
      this.homeService.getHomes().subscribe(homes => this.homes = homes);
  }
}
