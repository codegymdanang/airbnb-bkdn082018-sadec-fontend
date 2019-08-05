import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewDirective } from './directive/image-preview.directive';



@NgModule({
  declarations: [ImagePreviewDirective],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
