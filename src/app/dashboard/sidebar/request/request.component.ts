import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {RequestBookingComponent} from './request-booking/request-booking.component';
import {EnquiriesComponent} from './enquiries/enquiries.component';
import {ServicesComponent} from './services/services.component';

@Component({
  selector: 'app-request',
  imports: [
    CommonModule,
    MatTabGroup,
    MatTab,
    RequestBookingComponent,
    EnquiriesComponent,
    ServicesComponent
  ],
  templateUrl: './request.component.html',
  standalone: true,
  styleUrl: './request.component.scss'
})
export class RequestComponent {

}
