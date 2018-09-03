import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { CountersService } from '../counters.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  constructor(public usersService: UsersService, private countService: CountersService) {}

  onSetToInactive(id: number) {
    this.usersService.toInactive(id);
    // this.countService.increaseInactiveCount();
  }

  // could also declare users array and populate it with the list of active users from the service
  // users: string[];
  // ngOnInit() { this.users = this.usersService.activeUsers}; }
}
