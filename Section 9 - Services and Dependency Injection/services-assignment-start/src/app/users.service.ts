import { Injectable } from '@angular/core';
import { CountersService } from './counters.service';

// new syntax instead of adding to providers array: @Injectable({providedIn: 'root'})
@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CountersService) {}

  toActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.increaseActiveCount();
  }

  toInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.increaseInactiveCount();
  }
}
