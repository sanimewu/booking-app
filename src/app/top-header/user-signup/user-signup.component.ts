import { Component } from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from '@angular/router';
import {SignInService} from '../../service/sign-in.service';
import {NzMessageService} from 'ng-zorro-antd/message';

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

  constructor(private fb: FormBuilder, private signInService:SignInService,
              private router:Router, private message: NzMessageService) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitSignUp() {
    this.signInService.signUp(this.signUpForm.value).subscribe({
      next: (result) => {
        if(result){
          this.message.success('Sign up successfully');
          this.router.navigate(['/login']).then();
        }
      },
      error: (error) => {
        this.message.error('Sign up failed');
      }
    })
  }
}
