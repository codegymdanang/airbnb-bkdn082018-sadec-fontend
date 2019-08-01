import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomesComponent } from './pages/homes/homes.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { HomeDetailsComponent } from './pages/home-details/home-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { SharedModule } from '../shared';

@NgModule({
  declarations: [LoginComponent, HomesComponent, UserComponent, RegisterComponent, UserDetailsComponent, HomeDetailsComponent, NotFoundComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
