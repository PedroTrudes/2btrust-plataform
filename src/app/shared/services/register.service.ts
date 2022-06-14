import { ResponseRegister } from './../models/ResponseRegister';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestRegister } from './../RequestRegister';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  public doRegister(requestRegister: RequestRegister): Observable<ResponseRegister> {
    return this.httpClient.post<ResponseRegister>(
      'http://2btrust-api-prod.us-east-1.elasticbeanstalk.com/api/v2/register',
       requestRegister);
  }
}
