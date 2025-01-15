import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-flight',
  imports: [
    ReactiveFormsModule,
    NzInputDirective,
    NzButtonComponent,
  ],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.scss'
})
export class FlightComponent {
  flightForm!: FormGroup;

  constructor(private fb: FormBuilder) {
   this.flightForm = this.fb.group({
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      date: ['', Validators.required],
      passengerCount: [1, [Validators.required, Validators.min(1)]],
    });
  }
}
