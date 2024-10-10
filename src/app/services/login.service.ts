import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000";
  login(username: any, password: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/users?username=${username}&&password=${password}`)
  }

}