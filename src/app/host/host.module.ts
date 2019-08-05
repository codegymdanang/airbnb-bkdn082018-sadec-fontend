import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload'
import { HostRoutingModule } from './host-routing.module';
import { HostComponent } from './pages/host.component';
import { HomeRentingComponent } from './pages/home-renting/home-renting.component';
import { AuthGuard } from '../core/guards';
import { SharedModule } from '../shared';
import { FormsModule } from '@angular/forms';
import { ImagePreviewDirective } from '../core/directive/image-preview.directive';


@NgModule({
  declarations: [HostComponent, HomeRentingComponent, ImagePreviewDirective],
  imports: [
    CommonModule,
    HostRoutingModule,
    SharedModule,
    FileUploadModule,
    FormsModule,
  ],
  providers:[
    AuthGuard
  ]
})
export class HostModule { }
