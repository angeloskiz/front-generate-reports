import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { RecoverPasswordComponent } from './Components/recover-password/recover-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { ModalScannerComponent } from './Components/modal-scanner/modal-scanner.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ActivateUserComponent } from './Components/activate-user/activate-user.component';
import { FingerprintComponentComponent } from './Components/fingerprint-component/fingerprint-component.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'
import { EncryptionService } from './encryption.service';
import { ServicesClienteService } from './Components/activate-user/services-cliente.service';
import { UserListCrudComponent } from './Components/user-list-crud/user-list-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserInfoComponent,
    UserListComponent,
    UserDetailComponent,
    RecoverPasswordComponent,
    ModalScannerComponent,
    ActivateUserComponent,
    FingerprintComponentComponent,
    UserListCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgQrScannerModule,
    QRCodeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EncryptionService,
    ServicesClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
