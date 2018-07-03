import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  number = 0;
  ref;
  @Output() gameControl = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    // My solution
    // this.ref = setInterval(() => {this.number++;} , 1000);
    // this.gameControl.emit(this.ref);

    // Instructor solution
    this.ref = setInterval( () => {
      this.gameControl.emit(this.number + 1);
      this.number++;
      }, 1000);
  }

  onStopGame() {
    clearInterval(this.ref);
  }

}
