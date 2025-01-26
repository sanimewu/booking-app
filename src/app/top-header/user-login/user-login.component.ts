import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzButtonComponent, NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzDividerComponent} from 'ng-zorro-antd/divider';
import {Router, RouterLink} from '@angular/router';
import {SignInService} from '../../service/sign-in.service';
import {NzMessageService} from 'ng-zorro-antd/message';


@Component({
  selector: 'app-user-login',
  standalone: true,
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

  constructor(private fb: FormBuilder, private signInService: SignInService, private router: Router,
              private message: NzMessageService) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitSignIn() {
    this.signInService.signIn(this.loginForm.value).subscribe({
      next:(result)=>{
        if(result){
          this.message.success("Successfully logged in");
          this.router.navigate(['/home']).then();
        }
      },
      error:(error)=>{
        this.message.warning("Email and password is not valid");
        console.log(error);
      }
    })
  }

  forgetPass() {
    console.log('sasasasa',this.loginForm.value);
    this.signInService.forgetPass(this.loginForm.value.email).subscribe({
      next:(result)=>{
        console.log(result);
        this.message.success("check mail");
      },
      error:(error)=>{
        this.message.warning("Email is not valid");
        console.log(error);
      }
    })
  }
}
