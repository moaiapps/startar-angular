import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginForm, LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('errorDialog') errorDialog!: TemplateRef<any>;

  form: LoginForm = {loginId: "", password: ""};

  constructor(private loginService: LoginService,
              private modalService: NgbModal,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.loginService.login(this.form).subscribe(res => {
      if (res) {
        // login OK
        this.router.navigate(['/dashboard']);
      } else {
        // login NG
        this.modalService.open(this.errorDialog).result.then();
      }
    });
  }

}
