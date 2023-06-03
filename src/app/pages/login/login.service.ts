import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../../models/login.model';
import { apiUrl } from '../../environement/api';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user = new Subject<LoginResponse>();
  constructor(private http: HttpClient) {}

  login(loginData: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${apiUrl}/auth/login`, loginData).pipe(tap(user => { this.user.next(user); }));
  }
}
