import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './pages/customer.component';
import { MyHomesComponent } from './pages/my-homes/my-homes.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

@NgModule({
  declarations: [CustomerComponent, MyHomesComponent, MyProfileComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
