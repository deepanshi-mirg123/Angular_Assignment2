import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InactiveUserComponent } from './components/inactive-user/inactive-user.component';
import { ActiveUsersComponent } from './components/active-user/active-user.component';


@NgModule({
  declarations: [AppComponent, ActiveUsersComponent, InactiveUserComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
