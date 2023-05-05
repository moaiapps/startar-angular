import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginForm {
  loginId: string
  password: string
}

export interface LoginSession {
  loginId: string
  userName: string
}

const NoSession: LoginSession = {
  loginId: "",
  userName: "",
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private session = NoSession;

  constructor() { }

  getSession(): LoginSession {
    return this.session;
  }

  hasSession(): boolean {
    return this.session != NoSession;
  }

  login(form: LoginForm): Observable<boolean> {
    return new Observable<boolean>(observer => {
      if (form.loginId == "testuser" && form.password == "testpass1!") {
        this.session = {
          loginId: form.loginId,
          userName: 'Sample User'
        };
        observer.next(true);
      } else {
        this.session = NoSession;
        observer.next(false);
      }
      observer.complete();
    });
  }

  logout() {
    this.session = NoSession;
  }
}
