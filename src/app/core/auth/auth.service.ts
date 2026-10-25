import { Injectable, signal, computed } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'CUSTOMER' | 'ADMIN';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSignal = signal<User | null>(null);
  
  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isAuthenticated = computed(() => !!this.currentUserSignal());
  readonly isAdmin = computed(() => this.currentUserSignal()?.role === 'ADMIN');

  login(email: string, password: string): Observable<{ token: string, user: User }> {
    // Simulate API call
    if (email === 'admin@obsyra.com' && password === 'admin') {
      const mockUser: User = { id: '1', email, name: 'System Admin', role: 'ADMIN' };
      const token = 'mock-jwt-token-admin';
      this.handleAuthSuccess(token, mockUser);
      return of({ token, user: mockUser }).pipe(delay(1000));
    }
    
    if (email && password.length >= 6) {
      const mockUser: User = { id: '2', email, name: 'Jane Doe', role: 'CUSTOMER' };
      const token = 'mock-jwt-token-customer';
      this.handleAuthSuccess(token, mockUser);
      return of({ token, user: mockUser }).pipe(delay(1000));
    }

    return throwError(() => new Error('Invalid credentials')).pipe(delay(1000));
  }

  logout() {
    this.currentUserSignal.set(null);
    localStorage.removeItem('access_token');
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private handleAuthSuccess(token: string, user: User) {
    localStorage.setItem('access_token', token);
    this.currentUserSignal.set(user);
  }
}
