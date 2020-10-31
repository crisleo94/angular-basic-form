import { AfterViewInit, Component } from '@angular/core';
import { base64LOGO } from './shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  logoValue: string;

  constructor() {}

  ngAfterViewInit():void {
    setTimeout(() => {
     this.logoValue = base64LOGO; 
    });
  }

  title = 'prueba-ias';
}
