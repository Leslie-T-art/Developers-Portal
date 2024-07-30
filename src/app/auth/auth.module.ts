import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

// modules
import { UiModule } from '../shared/ui/ui.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './shared/shared.module';

// component
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ConfirmAccountComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule,
    UiModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
