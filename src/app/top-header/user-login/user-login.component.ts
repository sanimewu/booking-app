import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzButtonComponent, NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzDividerComponent} from 'ng-zorro-antd/divider';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [
    ReactiveFormsModule,
    NzButtonComponent,
    NzIconModule,
    NzButtonModule,
    NzInputDirective,
    NzDividerComponent,
    RouterLink
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitLogin() {
    console.log(this.loginForm.value);
  }
}
