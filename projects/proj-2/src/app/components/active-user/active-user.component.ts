import { Component } from '@angular/core';
import { UserService } from 'projects/proj-2/services/user.service';


@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss']
})
export class ActiveUsersComponent {

  constructor(public userService: UserService) {}

  toggleStatus(username: string) {
    this.userService.toggleUserStatus(username);
  }

}


