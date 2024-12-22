import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {UserLoginComponent} from './top-header/user-login/user-login.component';
import {UserSignupComponent} from './top-header/user-signup/user-signup.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login', component:UserLoginComponent},
  {path:'signup', component:UserSignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
