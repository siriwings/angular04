import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users/users.component";
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserCreateComponent} from "./users/user-create/user-create.component";
import {UserSingleComponent} from "./users/user-single/user-single.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {NotFoundComponent} from "./not-found/not-found.component";


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  // {
  //   path: 'users',
  //   component: UsersComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: UserListComponent
  //     },
  //     {
  //       path: 'create',
  //       component: UserCreateComponent
  //     },
  //     {
  //       path: ':id',
  //       component: UserSingleComponent
  //     },
  //     {
  //       path: ':id/edit',
  //       component: UserEditComponent
  //     }
  //   ]
  // },
  {path:'**',component:NotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
