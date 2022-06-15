import { AlertService } from './../../../shared/services/alert.service';
import { LoginService } from './../../../shared/services/login.service';
import { RequestLogin } from './../../../shared/RequestLogin';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent {


  @ViewChild('loginForm') loginForm: NgForm;
  emailModel = 'demo@vien.com';
  passwordModel = 'demovien1122';

  buttonDisabled = false;
  buttonState = '';

  public requestLogin: RequestLogin;

  constructor(private alertService: AlertService ,
    private loginService: LoginService,
    private authService: AuthService,
    private notifications: NotificationsService,
    private router: Router) { }

  ngOnInit(): void{
    this.requestLogin = new RequestLogin();
  }

  public doLogin() :void{
    console.log(this.requestLogin);
    this.loginService.doLogin(this.requestLogin).subscribe(dataLog =>{
      console.log(dataLog);
      this.alertService.success('logado com sucesso');
      this.router.navigate([environment.adminRoot]);
    },
    (httpError) =>{
      this.alertService.error(httpError.error.errors.email[0] || httpError.error.errors.password[0]);
      console.error(httpError);
    });

  }

  showMobileMenu = false;

  buyUrl = environment.buyUrl;
  adminRoot = environment.adminRoot;

  onSubmit(): void {
    if (this.loginForm.valid) {
      if (this.buttonDisabled) {

        this.buttonDisabled = true;
        this.buttonState = 'show-spinner';
        this.authService.signIn(this.loginForm.value).then(() => {
          this.router.navigate([environment.adminRoot]);
        }).catch((error) => {
          this.buttonDisabled = false;
          this.buttonState = '';
          this.notifications.create('Error', error.message, NotificationType.Bare, {
            theClass: 'outline primary',
            timeOut: 6000,
            showProgressBar: false
          });
        });
      }
    }
  }
}
