import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzButtonComponent, NzButtonModule} from 'ng-zorro-antd/button';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {NzRadioComponent, NzRadioGroupComponent} from 'ng-zorro-antd/radio';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzDatePickerComponent, NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-flight',
  imports: [NzButtonComponent, NzInputDirective, ReactiveFormsModule, NzButtonModule,
    NzSelectComponent, NzRadioGroupComponent, NzRadioComponent, NzOptionComponent,
    NzDatePickerModule, CommonModule

  ],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.scss'
})
export class FlightComponent {
  flightForm: FormGroup;
  dateFormat = 'yyyy/MM/dd';

  constructor(private fb: FormBuilder) {
   this.flightForm = this.fb.group({
     routeType: ['A', Validators.required],
     departure: ['', Validators.required],
     arrival: ['', Validators.required],
     date: [null, Validators.required],
     passengerCount: [1, [Validators.required, Validators.min(1)]],
     travelType: ['Children', Validators.required],
     classType: ['Economy', Validators.required],
    });
  }

  flightBookingSubmit() {
    console.log(this.flightForm.value);
  }
}
