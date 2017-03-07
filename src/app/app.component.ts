import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {User} from './shared/models/user';
import {UserService} from './shared/services/user.service';
import {AuthService} from "./shared/services/auth.service";
//import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'my-app',
  styles:[`
.active{
color:purple !important;
}`],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        users => this.users = users
      );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  /**
   * Is the user logged in?
   */
  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }


}
