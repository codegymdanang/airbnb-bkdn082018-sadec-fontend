import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { HostComponent } from './pages/host.component';


@NgModule({
  declarations: [HostComponent],
  imports: [
    CommonModule,
    HostRoutingModule
  ]
})
export class HostModule { }
