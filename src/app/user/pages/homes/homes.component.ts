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

    min;
    max;
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
        this.min = this.route.snapshot.paramMap.get('min');
        this.max = this.route.snapshot.paramMap.get('max');
        this.bedRoomNumber = this.route.snapshot.paramMap.get('soPhongNgu');
        this.bathRoomumber = this.route.snapshot.paramMap.get('soPhongTam');
        if (!(this.bedRoomNumber === null)) {
            this.getHomesByBedRoomNumber(this.bedRoomNumber);
        } else if (!(this.bathRoomumber === null)) {
            this.getHomesByBathRoomNumber(this.bathRoomumber);
        } else if ( !(this.min === null) && !(this.max === null)) {
            this.getHomesByPrice(this.min, this.max)
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
