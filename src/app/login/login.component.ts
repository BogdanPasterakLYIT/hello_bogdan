import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name = 'Bogdan';
  image = 'assets/img/icon.png';

  onClick() {
    console.log(this.name);
  }
  onKeyUp(e: any) {
    console.log(e.target.value);
  }
}
