import { Component } from '@angular/core';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  // template: `
  //   <h2>Inactive Users</h2>
  //   <ul>
  //     <li *ngFor="let user of inactiveUsers">
  //       {{ user }}
  //       <button (click)="setToActive(user)">Set to Active</button>
  //     </li>
  //   </ul>
  // `,
  styleUrls: ['./inactive-user.component.scss']
})
export class InactiveUserComponent {
  // inactiveUsers: string[] = [];

  // constructor(private StatusService : StatusService) {
  //   this.inactiveUsers = this.StatusService.getInactiveUsers();
  // }

  // setToActive(user: string): void {
  //   this.StatusService.setToActive(user);
  // }

  onclick(){
    alert("Set to Active");
   
  }
}

// inactive.component.ts
// import { Component } from '@angular/core';
// import { Service1Service } from '../../services/service-1.service';
// // import { UserService } from '../user.service';

// @Component({
//   selector: 'app-inactive',
//   templateUrl: './inactive-user.component.html',
  
// })
// export class InactiveComponent {
//   inactiveUsers = this.Service1Service.getUsers().filter((user: { active: any; }) => !user.active);

//   constructor(private Service1Service: Service1Service) {}

//   setToActive(userId: number) {
//     this.Service1Service.switchUserState(userId);
//     this.inactiveUsers = this.Service1Service.getUsers().filter((user: { active: any; }) => !user.active);
//   }
// }

// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { UsersService } from '../../services/user.services';
// import { CounterService } from '../../services/counter.service';
// // import { CounterService } from '../services/counter.service';
// // import { UsersService } from '../services/users.service';

// @Component({
//   selector: 'app-inactive-users',
//   templateUrl: './inactive-user.component.html',
//   styleUrls: ['./inactive-user.component.scss'],
// })
// export class InactiveUsersComponent {
//   @Input() users!: string[];
//   // @Output() userSetToActive = new EventEmitter<number>();

//   constructor(
//     private usersService: UsersService,
//     private counterService: CounterService
//   ) {}
//   onSetToActive(id: number) {
//     // this.userSetToActive.emit(id);
//     this.usersService.setActive(id);
//   }
// }