import { Component, OnInit, EventEmitter } from '@angular/core';
import { Home } from 'src/app/core/models/home';
import { HomeService } from 'src/app/core/services/home.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { FileUploadService } from 'src/app/core/services/file-upload.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { concat } from  'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-renting',
  templateUrl: './home-renting.component.html',
  styleUrls: ['./home-renting.component.css']
})
export class HomeRentingComponent implements OnInit {

  loading = false;
  submitted = false;
  imgUrls: any[] = [];
  message: string;
  num: number = 0;
  soLuongArray: number[] = [0,1,2,3,4,5,6,7,8,9,10];
  home: Home = new Home();
  uploader: FileUploader = new FileUploader({});

  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e; 
  }

  constructor(
      private location: Location,
      private router: Router,
      private uploadFileService: FileUploadService,
      private homeService: HomeService,
      private authService: AuthenticationService
  ) { }

  ngOnInit() { } 

  getImages(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

  upload(data: Home) {
      let images = this.getImages();
      let requests = [];
      images.forEach( image => {
          let formData = new FormData();
          formData.append('image', image.rawFile, image.name);
          formData.append('id', JSON.stringify(data['id']));
          requests.push(this.uploadFileService.upload(formData))
      });
      concat(...requests).subscribe();
  }

  onSubmit(homeForm: FormGroup) {
      this.submitted = true;
      this.loading = true;
      if (homeForm.invalid) {
        this.loading = false;
        return;
      }

      this.authService.getUser().subscribe(
          user => {
              this.home.chuNha = user;
              this.homeService.addHome(this.home).subscribe(
                  data => { 
                      this.upload(data);
                      this.router.navigate(['']);
                    })
            });
  }

  onClick() {
      this.location.back();
  }
}
