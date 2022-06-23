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
    private alertService: AlertService,
    private authService: AuthService,
    private notifications: NotificationsService,
    private router: Router) { }


    ngOnInit(): void{
      this.requestRegister = new RequestRegister();
    }
  public doRegister() :void{
    console.log(this.requestRegister);
    this.registerService.doRegister(this.requestRegister).subscribe(dataRegister =>{
    console.log(dataRegister);
    this.notifications.success('Success', dataRegister.message ,NotificationType.Success, {
      theClass: 'outline primary', timeOut: 2000, showProgressBar: false
    });

    },
    (httpError) =>{
      //this.alertService.error(httpError.error.errors.email[0] ||
      //httpError.error.errors.password[0] ||
      //httpError.error.errors.name[0]);
      this.notifications.create('Error',
      httpError.error.errors.email[0] || httpError.error.errors.password[0],
      NotificationType.Bare,
     { theClass: 'outline primary', timeOut: 2000, showProgressBar: false });
      console.error(httpError);
    })
  }

  public resetCampos(){

  }

  // onSubmit(): void {
  //   if (this.registerForm.valid && !this.buttonDisabled) {
  //     this.buttonDisabled = true;
  //     this.buttonState = 'show-spinner';

  //     this.authService.register(this.registerForm.value).then((user) => {
  //       this.router.navigate([environment.adminRoot]);
  //     }).catch((error) => {
  //       this.notifications.create('Error', error.message, NotificationType.Bare,
  //         { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
  //       this.buttonDisabled = false;
  //       this.buttonState = '';
  //     });
  //   }
  // }
}
