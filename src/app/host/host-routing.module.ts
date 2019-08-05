import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostComponent } from './pages/host.component';
import { AuthGuard } from '../core/guards';
import { HomeRentingComponent } from './pages/home-renting/home-renting.component';


const routes: Routes = [{ 
  path: 'home', component: HostComponent, canActivate: [AuthGuard],
  children: [
    {path: 'renting-home', component: HomeRentingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
