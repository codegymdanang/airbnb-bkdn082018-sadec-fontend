import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomesComponent } from './pages/homes/homes.component';
import { UserComponent } from './pages/user.component';
import { FormsModule } from '@angular/forms'
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from '../core/guards';

const routes: Routes = [
  { path: '', component: UserComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'join', component: RegisterComponent},
      {path: '', component: HomesComponent, pathMatch: 'full'},
      {path: 'homes/so-phong-ngu/:soPhongNgu', component: HomesComponent},
      {path: 'homes/so-phong-tam/:soPhongTam', component: HomesComponent},
      {path: 'homes/khoang-tien/:min/:max', component: HomesComponent},
      {path: '**', component: NotFoundComponent},
    ],
  }
];


@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
