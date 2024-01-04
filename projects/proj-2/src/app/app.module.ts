// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { UserComponent } from './app.component';
// import { ActiveUsersComponent} from './components/active-user/active-user.component';
// import { InactiveUsersComponent } from './components/inactive-user/inactive-user.component';
// import { UsersService } from './services/user.services';

// @NgModule({
//   imports: [
//     BrowserModule,
    

//   ],
//   declarations: [
//     UserComponent,
//     ActiveUsersComponent,
//     InactiveUsersComponent
//   ],
 
//   providers: [UsersService],
//   bootstrap: [UserComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InactiveUserComponent } from './components/inactive-user/inactive-user.component';
// import { UsersService } from './services/user.services';
import { ActiveUsersComponent } from './components/active-user/active-user.component';
// import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [AppComponent, ActiveUsersComponent, InactiveUserComponent],
  imports: [BrowserModule, FormsModule],
  // providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
