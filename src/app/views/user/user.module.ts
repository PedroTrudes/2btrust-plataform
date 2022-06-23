import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ComponentsStateButtonModule } from 'src/app/components/state-button/components.state-button.module';
import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';
import { MeetingComponent } from './meeting/meeting.component';
import {FormsContainersModule} from '../../containers/forms/forms.containers.module'

@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UserComponent,
    ResetPasswordComponent,
    ConfirmationEmailComponent,
    MeetingComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    ComponentsStateButtonModule,
    FormsContainersModule
  ]
})
export class UserModule { }
