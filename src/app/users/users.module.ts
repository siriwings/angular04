import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

import {UsersComponent} from "./users.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserSingleComponent} from "./user-single/user-single.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserCreateComponent} from "./user-create/user-create.component";
import {UserService} from "../shared/services/user.service";
import {AuthService} from "../shared/services/auth.service";
import {usersRouting} from "./users.routing";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    usersRouting
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserSingleComponent,
    UserEditComponent,
    UserCreateComponent
  ],
  providers: [
    UserService,
    AuthService
  ]
})
export class UsersModule {
}
