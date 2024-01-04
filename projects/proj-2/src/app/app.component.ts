// import { Component } from '@angular/core';
// import { Title } from '@angular/platform-browser';
// @Component({
//   selector: 'app-root',
  
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'My Angular App';
//   // filterButtons = [
//   //   { text: 'Posted', isClicked: false },
//   //   { text: 'FFM', isClicked: false },
//   //   { text: '9999', isClicked: false },
//   // ]


//   // setActive(button: any): void {
//   //   for(let but of this.filterButtons) {
//   //     but.isClicked = false;
//   //   }

//   //   button.isClicked = true;
//   // }
// }


// import { Component } from '@angular/core';


// interface User {
//   name: string;
//   isActive: boolean;
// }

// @Component({
//   selector: 'app-root',
//  templateUrl: './app.component.html',
// })
// // export class AppComponent {
// //   // user: User = {
// //   //   name: 'John Doe',isActive: true,
// //   // };

// //   user :User[]=[
// //     {  name: 'John Doe', isActive: true },
// //     {  name: 'Jane Smith',  isActive: false },
// //     {  name: 'Bob Johnson', isActive: true },
// //   ];
// // }
//   // user: User = [
//   //   {  name: 'John Doe', isActive: true },
//   //   {  name: 'Jane Smith',  isActive: false },
//   //   {  name: 'Bob Johnson', isActive: true },
//   // ];
//   // toggleUserState(): void {
//   //   this.user[0].isActive = !this.user[0].isActive;
//   // }
  
//   // toggleUserState(): void {
//   //   this.user.isActive = !this.user.isActive;
//   // }toggleUserState(): void {
//   //   this.user.isActive = !this.user.isActive;
//   // }


// export class UserComponent {
// users: any;
//   // users: User[]= [
//   //   { name: 'John Doe', isActive: true },
//   //   { name: 'Jane Smith', isActive: false },
//   //   { name: 'Bob Johnson', isActive: true },
//   // ];

// // toggleUserState(): void  {
// //   this.users.isActive = !this.users.isActive;
// // }
// }


import { Component, OnInit } from '@angular/core';
// import { UsersService } from './services/user.services';
// import { UsersService } from './services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  // constructor(private usersService: UsersService) {}

  // ngOnInit(): void {
  //   this.activeUsers = this.usersService.activeUsers;
  //   this.inactiveUsers = this.usersService.inactiveUsers;
  }

  // activeUsers= ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

