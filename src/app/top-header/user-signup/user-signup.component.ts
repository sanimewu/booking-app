import { Component } from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-user-signup',
  imports: [
    NzButtonComponent,
    NzDividerComponent,
    NzInputDirective,
    NzWaveDirective,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.scss'
})
export class UserSignupComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(11)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitLogin() {
    console.log(this.signUpForm.value);
  }
}
