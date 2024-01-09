import { computeMsgId } from '@angular/compiler';
import { Component } from '@angular/core';
import { UserService } from 'projects/proj-2/services/user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.scss']
})
export class InactiveUserComponent {
  constructor(public userService: UserService) {}

  toggleStatus(username: string) {
    this.userService.toggleUserStatus(username);
  }

}