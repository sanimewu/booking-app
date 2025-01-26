import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private auth:AngularFireAuth) { }

  signIn(params:SignIn):Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(
      params.email,params.password,
    ))
  };

  signUp(params:SignIn):Observable<any> {
    return from(this.auth.createUserWithEmailAndPassword(
      params.email, params.password,
    ))
  };

  forgetPass(email:string):Observable<any> {
    return from(this.auth.sendPasswordResetEmail(email));
  }

}

export interface SignIn {
  email: string;
  password: string;
}
