import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router,) { }

  canActivate(route:any, state: RouterStateSnapshot) {
    if (this.getUserToken()) {
      return false;
    } else {
      return true;
    }
  }

  getUserToken() {
    let userToken = localStorage.getItem('role');
    return userToken;
  }
}
