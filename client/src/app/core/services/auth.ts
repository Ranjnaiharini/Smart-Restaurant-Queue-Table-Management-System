import { Injectable, signal } from '@angular/core';
import { ApiService } from './api';
import { tap } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  role: 'Customer' | 'Manager' | 'Admin';
  contact_info?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(null);

  get user() {
    return this._user();
  }

  constructor(private api: ApiService) {}

  login(credentials: { email: string; password: string }) {
    // Expect server to return { token, user }
    return this.api.post<any>('auth/login', credentials).pipe(
      tap((res) => {
        const data = (res as any).data || res;
        if (data.token) localStorage.setItem('token', data.token);
        if (data.user) this._user.set(data.user);
      })
    );
  }

  register(payload: any) {
    return this.api.post<any>('auth/register', payload).pipe(
      tap((res) => {
        const data = (res as any).data || res;
        if (data.token) localStorage.setItem('token', data.token);
        if (data.user) this._user.set(data.user);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this._user.set(null);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  hasRole(role: string) {
    return this.user?.role === role;
  }
}

