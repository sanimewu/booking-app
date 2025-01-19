import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzButtonComponent, NzButtonModule} from 'ng-zorro-antd/button';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {NzRadioComponent, NzRadioGroupComponent} from 'ng-zorro-antd/radio';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-flight',
  imports: [
    NzButtonComponent,
    NzInputDirective,
    ReactiveFormsModule,
    NzButtonModule,
    NzSelectComponent,
    NzRadioGroupComponent,
    NzRadioComponent,
    NzOptionComponent,
    NzIconDirective,

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
