import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, LoginSession } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public session!: LoginSession;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    if (!this.loginService.hasSession()) {
      this.router.navigate(['/login'])
    } else {
      this.session = this.loginService.getSession();
    }
  }

  logout() {
    this.router.navigate(['/logout'])
  }

}
