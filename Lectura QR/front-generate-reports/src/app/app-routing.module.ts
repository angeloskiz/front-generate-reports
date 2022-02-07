import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RecoverPasswordComponent } from './Components/recover-password/recover-password.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: RecoverPasswordComponent },
  {
    path: 'user-info',
    component: UserInfoComponent,
    children: [
      { path: 'list', component: UserListComponent },
      { path: 'list-detail/:id', component: UserDetailComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
