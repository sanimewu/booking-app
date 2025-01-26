import { Component } from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-welcome',
  imports: [
    NzButtonComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
