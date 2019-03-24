import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userDetails: Object =  {
    username: localStorage.getItem('Username'),
    password: localStorage.getItem('Password')
  };

  constructor() { }

  getLoginDetails() {
    return this.userDetails;
  }
}
