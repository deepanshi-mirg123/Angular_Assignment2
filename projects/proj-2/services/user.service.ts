import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers: string[] = ['Manu', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Max'];

  toggleUserStatus(username: string) {
    const index = this.activeUsers.indexOf(username);
    
    if (index !== -1) {
      this.activeUsers.splice(index, 1);
      this.inactiveUsers.push(username);
    } else {
      const inactiveIndex = this.inactiveUsers.indexOf(username);
      this.inactiveUsers.splice(inactiveIndex, 1);
      this.activeUsers.push(username);
    }
  }
}

   
