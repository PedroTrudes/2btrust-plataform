import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGuard } from '../../shared/auth.guard';
import { UserRole } from '../../shared/auth.roles';
import { environment } from 'src/environments/environment';

// import {LoginComponent} from '../../2btrust/forms/login/login.component';

const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash

const routes: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'reset-password', component: ResetPasswordComponent }
        ]
    },
    {

      path: adminRoot,
      loadChildren: () => import('../app/app.module').then((m) => m.AppModule),
      data: { roles: [UserRole.Admin, UserRole.Editor] },
      canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
