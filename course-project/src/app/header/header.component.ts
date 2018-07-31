import { Component } from '@angular/core';
import { ServerService } from '../shared/servers.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private serverService: ServerService, private authService: AuthService) {}

  onSave() {
    this.serverService.storeRecipes()
    .subscribe(
      (response) => {
        console.log(response);
        alert('Your recipes have been saved');
      },
      (error) => {
        console.log(error);
        alert('There was an error when storing your recipes');
      }
    );
  }

  onFetch() {
    this.serverService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
