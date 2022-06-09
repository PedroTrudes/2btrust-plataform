import { ResponseLogin } from './../models/ResponseLogin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestLogin } from './../RequestLogin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(
      'http://2btrust-api-prod.us-east-1.elasticbeanstalk.com/docs/api-docs.json/Authentication/login',
       requestLogin
       );
  }
}
