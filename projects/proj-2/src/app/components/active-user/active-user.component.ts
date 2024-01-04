import { Component } from '@angular/core';
// import { UsersService } from '../../services/user.services';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss']
})
export class ActiveUsersComponent {
  // UserService: any;
  onclick(){
    alert("Set to Inactive");
  }
}
