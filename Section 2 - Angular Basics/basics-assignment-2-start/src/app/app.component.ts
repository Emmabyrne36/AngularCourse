import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  allowClick = false;

  onClickButton() {
    this.userName = '';
    this.allowClick = false;
  }
}
