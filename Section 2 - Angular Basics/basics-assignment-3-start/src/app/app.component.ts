import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isClicked = false;
  clickedArr = [];
  count = 1;

  // Solution
  showSecret = false;
  log = [];

  addToList() {
    this.clickedArr.push(this.count);
    this.count++;
  }

  showHide() {
    const x = document.getElementById('change');
      if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    this.addToList();
  }

  getColour(item) {
    if (item >= 5) {
      return 'blue';
    } else {
      return 'white';
    }
  }


  // Solution
  onToggleDetails() {
    // this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}

