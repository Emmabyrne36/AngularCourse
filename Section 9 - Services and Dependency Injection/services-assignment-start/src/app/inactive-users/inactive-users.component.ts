import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { CountersService } from '../counters.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(public usersService: UsersService, private countService: CountersService) {}

  onSetToActive(id: number) {
    this.usersService.toActive(id);
    // this.countService.increaseActiveCount();
  }
}
