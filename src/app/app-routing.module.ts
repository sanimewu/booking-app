import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserLoginComponent} from './top-header/user-login/user-login.component';
import {UserSignupComponent} from './top-header/user-signup/user-signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookingComponent} from './dashboard/sidebar/booking/booking.component';
import {RequestComponent} from './dashboard/sidebar/request/request.component';
import {AboutComponent} from './dashboard/sidebar/about/about.component';
import {WelcomeComponent} from './dashboard/sidebar/welcome/welcome.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FlightComponent} from './flight/flight.component';

const routes: Routes = [
  {path:'home', component:HomepageComponent},
  {path:'login', component:UserLoginComponent},
  {path:'signup', component:UserSignupComponent},
  {path:'flight', component:FlightComponent},
  // {path:'dashboard', component:DashboardComponent,
  //   children:[
  //     {path:'', component:WelcomeComponent},
  //     {path:'request', component:RequestComponent},
  //     {path:'booking', component:BookingComponent},
  //     {path:'about', component:AboutComponent},
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
