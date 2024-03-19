import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { apiUrls } from '../api.urls';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  // isloggedIn = signal<boolean>(false);
  // constructor() { }

  registerServices(registerObj: any) {
    return this.http.post<any>(
      `${apiUrls.authServicesApi}register`,
      registerObj
    );
  }

  loginServices(loginObj: any) {
    // console.log("loginServices",loginObj);
    return this.http.post<any>(`${apiUrls.authServicesApi}login`, loginObj);
  }
  sendEmailServices(email: string) {
    // console.log('sendEmailServices', email);
    return this.http.post<any>(`${apiUrls.authServicesApi}send-email`, {
      email: email,
    });
  }

  resetPasswordServices(resetObj: any) {
    // console.log('resetPasswordServices', resetObj);
    return this.http.post<any>(
      `${apiUrls.authServicesApi}reset-password`,
      resetObj
    );
  }

  isLoggedIn() {
    return !!localStorage.getItem('user_id');
  }
}
