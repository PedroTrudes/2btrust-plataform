import { RegisterService } from './../../../shared/services/register.service';
import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RequestRegister } from 'src/app/shared/RequestRegister';
import { AlertService } from './../../../shared/services/alert.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm: NgForm;
  buttonDisabled = false;
  buttonState = '';

  public requestRegister: RequestRegister;

  constructor(
    private registerService: RegisterService,
    private authService: AuthService,
              private notifications: NotificationsService,
              private router: Router) { }

  public doRegister() :void{
    console.log(this.requestRegister);
    this.registerService.doRegister(this.requestRegister).subscribe(dataRegister =>{
      console.log(dataRegister);
    },
    (httpError) =>{
      console.error(httpError);
    })
  }

  onSubmit(): void {
    if (this.registerForm.valid && !this.buttonDisabled) {
      this.buttonDisabled = true;
      this.buttonState = 'show-spinner';

      this.authService.register(this.registerForm.value).then((user) => {
        this.router.navigate([environment.adminRoot]);
      }).catch((error) => {
        this.notifications.create('Error', error.message, NotificationType.Bare,
          { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
        this.buttonDisabled = false;
        this.buttonState = '';
      });
    }
  }
}
