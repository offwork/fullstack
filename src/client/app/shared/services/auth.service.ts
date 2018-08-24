import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import  * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private router: Router) {
    // If not authenticated but there are still items in localStorage, log out
    const lsToken = localStorage.getItem('access_token');

    if(!this.isAuthenticated) {
      this.logout();
    }
  }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }
  
  getToken() {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  
  isAuthenticated(): boolean {
    const token = this.getToken();
    if(!token) {
      return false;
    }
    // Check if current time is past access token's expiration
    const exp = decode(this.getToken())['exp'];
    const expiresAt = new Date(exp * 1000);
    const currentDate = new Date(Date.now());
    const tokenValid = expiresAt > currentDate;

    return tokenValid;
  }
}
