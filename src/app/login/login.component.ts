import { Component, Input } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input()
  name = '';
  image = 'assets/img/icon.png';
  euro = 2.2;

  onClick() {
    console.log(this.name);
  }
  onKeyUp(e: any) {
    console.log(e.target.value);
  }
}
