import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AdminService {

  // apiUrl: string;

  // constructor(private http: HttpClient) {
  //   this.apiUrl = "Link principal";
  // }

  // postSignIn(payload: any): Observable<any>{
  //   let url = this.apiUrl + "/EndPoint para enviar a la base de datos";
  //   return this.http.post(url, payload);
  // }

  // postSignUp(payload: any): Observable<any>{
  //   let url = this.apiUrl + "/EndPoint para enviar a la base de datos";
  //   return this.http.post(url, payload);
  // }

}
