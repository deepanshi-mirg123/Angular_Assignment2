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

  }

