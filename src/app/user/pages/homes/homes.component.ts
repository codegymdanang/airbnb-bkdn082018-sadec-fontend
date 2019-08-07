import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import { Home } from 'src/app/core/models/home';
import { Image } from 'src/app/core/models/image';
import { DomSanitizer } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { Router, ActivatedRoute } from '@angular/router'

registerLocaleData(localeVi, 'vi');

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

    minPrice;
    maxPrice;
    bedRoomNumber;
    bathRoomumber;
    homes: Home[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private domSanitizer: DomSanitizer,
        private homeService: HomeService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.minPrice = params['min'];
            this.maxPrice = params['max'];
            this.bedRoomNumber = params['soPhongNgu'];
            this.bathRoomumber = params['soPhongTam']
        })
        
        if (!(this.bedRoomNumber === undefined)) {
            this.getHomesByBedRoomNumber(this.bedRoomNumber);
        } else if (!(this.bathRoomumber === undefined)) {
            this.getHomesByBathRoomNumber(this.bathRoomumber);
        } else if ( !(this.minPrice === undefined) && !(this.maxPrice === undefined)) {
            this.getHomesByPrice(this.minPrice, this.maxPrice)
        } else {
            this.getHomes();
        }
    }

    convertImageToBase64(images: Image[]) {
        for (let image of images) {
            image.hinhAnhView =  this.domSanitizer.bypassSecurityTrustUrl('data:image/jpg;base64, ' + image.hinhAnh);
        }
    }

    getHomeInterator(homes: Home[]) {
        for (const home of homes) {
            this.convertImageToBase64(home.hinhAnhNha);
        }
    }

    getHomes() {
        this.homeService.getHomes().subscribe(homes => {
            this.homes = homes;
            this.getHomeInterator(homes);
        });
    }

    getHomesByBedRoomNumber(number){
        this.homeService.getHomesByBedRoomNumber(number).subscribe( homes => {
            this.homes = homes;
            this.getHomeInterator(homes);
        })
    }

    getHomesByBathRoomNumber(number){
        this.homeService.getHomesByBathRoomNumber(number).subscribe( homes => {
            this.homes = homes;
            this.getHomeInterator(homes);
        })
    }

    getHomesByPrice(min, max){
        this.homeService.getHomesByPrice(min, max).subscribe( homes => {
            this.homes = homes;
            this.getHomeInterator(homes);
        })
    }
}
