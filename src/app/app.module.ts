import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BookingComponent } from './dashboard/sidebar/booking/booking.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {RequestBookingComponent} from './dashboard/sidebar/request/request-booking/request-booking.component';
import {EnquiriesComponent} from './dashboard/sidebar/request/enquiries/enquiries.component';
import {ServicesComponent} from './dashboard/sidebar/request/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RequestBookingComponent,
    EnquiriesComponent,
    ServicesComponent,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
