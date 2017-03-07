import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {subscribeOn} from "rxjs/operator/subscribeOn";
import {AuthService} from '../shared/services/auth.service';

@Component({
  templateUrl: './../login/login.component.html'
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password: ''};
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private service: AuthService) {
  }

  ngOnInit() {
  }

  /**
   * Login a user
   */

  login() {
    this.errorMessage='';
    this.service.login(this.credentials.username, this.credentials.password)
      .subscribe(
        data => {
          this.router.navigate(['']);
          console.log(data);
        },
        err => {
          this.errorMessage=err;
          console.log(err);
        }
      );
  }


}
