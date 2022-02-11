import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateUserComponent } from './Components/activate-user/activate-user.component';
import { FingerprintComponentComponent } from './Components/fingerprint-component/fingerprint-component.component';
import { LoginComponent } from './Components/login/login.component';
import { RecoverPasswordComponent } from './Components/recover-password/recover-password.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { UserListCrudComponent } from './Components/user-list-crud/user-list-crud.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: RecoverPasswordComponent },
  {
    path: 'user-info',
    component: UserInfoComponent,
    children: [
      { path: 'list', component: UserListComponent },
      { path: 'fingerprint', component: FingerprintComponentComponent },
      { path: 'list-detail/:id', component: UserDetailComponent },
      { path: 'activate-user/:id', component: ActivateUserComponent },
      { path: 'crud-user', component: UserListCrudComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
