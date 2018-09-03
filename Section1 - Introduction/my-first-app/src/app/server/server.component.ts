import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server', // this is the best way to do this, can also declare as a class like '.app-servers' but no recommended
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColour() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
