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
  // toggleme(){
  //   this.Service1Service.toggle = !this.Service1Service.toggle
  //   }
}
// // // active.component.ts
// import { Component } from '@angular/core';
// import { UsersService } from '../../services/user.services';
// // import { Service1Service } from '../../services/service-1.service';
// // import { Service1Service } from '../../services/service-1.service';

// @Component({
//   selector: 'app-active',
//   templateUrl: './active-user.component.html'
// })
// export class ActiveComponent {
//   activeUsers = this.UsersService.getUsers().filter((user: { active: any; }) => user.active);

//   constructor(private UsersService: UsersService) {}

//   setToInactive(userId: number) {
//     this.UsersService.switchUserState(userId);
//     this.activeUsers = this.UsersService.getUsers().filter((user: { active: any; }) => user.active);
//   }
// }

//   const activeUsers = this.Service1Service.getUsers().filter((user: { active: any; }) => user.active);

//   constructor(private UsersService: UsersService) {}

//   setToInactive(userId: number) {
//     this.Service1Service.switchUserState(userId);
//     this.activeUsers = this.Service1Service.getUsers().filter((user: { active: any; }) => user.active);
//   }
// |


// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { UsersService } from '../../services/user.services';
// import { CounterService } from '../../services/counter.service';
// // import { CounterService } from '../services/counter.service';
// // import { UsersService } from '../services/users.service';

// @Component({
//   selector: 'app-active-users',
//   templateUrl: './active-user.component.html',
//   styleUrls: ['./active-user.component.scss'],
// })
// export class ActiveUsersComponent {
//   @Input() users!: string[];
//   // @Output() userSetToInactive = new EventEmitter<number>();

//   constructor(
//     private usersService: UsersService,
//     private counterService: CounterService
//   ) {}
//   onSetToInactive(id: number) {
//     // this.userSetToInactive.emit(id);
//     this.usersService.setInactive(id);
//   }
// }