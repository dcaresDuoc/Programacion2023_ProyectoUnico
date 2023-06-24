import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../models/login.model';
import { Observable, map } from 'rxjs';
import { LogedModel } from '../models/loged.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioLogueado: any;
  user!: LogedModel;


  private tokenKey = 'token';
  private userRoleKey = 'userRole';

  extractUserRole(token: string): string | null {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload && payload.role) {
      return payload.role;
    }
    return null;
  }

  setUserName(userName: string): void {
    localStorage.setItem('Username', userName);
  }



  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  removeUSername(): void {
    localStorage.removeItem('Username');
  }

  getUserRole(): string | null {
    return localStorage.getItem(this.userRoleKey);
  }

  

  setUserRole(userRole: string): void {
    localStorage.setItem(this.userRoleKey, userRole);
  }

  removeUserRole(): void {
    localStorage.removeItem(this.userRoleKey);
  }

  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    }
    return null;
  }



  logout(): void {
    this.removeToken();
    this.removeUserRole();
    this.removeUSername();
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }


  constructor(private httpClient: HttpClient) { }

  login(creds: Credentials){
    return this.httpClient.post('/api/login',creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>)=> {
        const body = response.body;
        const headers = response.headers;
      
        const bearerToken = headers.get('Authorization')!;
        const token = bearerToken;
        localStorage.setItem('token',token);
        return body;
    }))
  }


}