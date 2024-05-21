import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly APIUrl = "http://localhost:5000/api/auth/"

  constructor(private http: HttpClient , private router:Router) { }

  register(user: any) {
    return this.http.post<any>(this.APIUrl+'register', user);
  }

  login(user: any) {
    return this.http.post<any>(this.APIUrl+'login', user);
  }


  setToken(token: string): void {
    localStorage.setItem('api_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('api_token');
  }

  clearToken(): void {
    localStorage.removeItem('api_token');
  }

  logout(): void {
    this.clearToken();
    this.router.navigate(['/login']);
  }

  
}
