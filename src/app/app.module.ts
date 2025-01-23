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
import {NzButtonModule} from 'ng-zorro-antd/button';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import { registerLocaleData } from '@angular/common';
import localeZhCn from '@angular/common/locales/zh';
import { NZ_I18N, en_US  } from 'ng-zorro-antd/i18n';
import { environment } from '../environment/environment';
import {AngularFireModule} from '@angular/fire/compat';

registerLocaleData(localeZhCn);
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
    FormsModule,
    NzButtonModule,
    RequestBookingComponent,
    EnquiriesComponent,
    ServicesComponent,
    CommonModule,
    NzDatePickerModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
