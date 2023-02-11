import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment  from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _http:HttpClient) {
    
  }
 login(username:string='', password:string=''){    
   const userInfo = { username:username, password:password }
   const headers = new HttpHeaders().set('Content-Type', 'application/json') ;
   return this._http.post('http://localhost:3500/login'
   , JSON.stringify(userInfo) 
   , {headers:headers, responseType: 'text'}

 ) 
 }//login
 thoat() {
   localStorage.removeItem("id_token");
   localStorage.removeItem("expires_at");
   localStorage.removeItem("username");
   localStorage.removeItem("userid");
 }
 public daDangNhap() {
   const str = localStorage.getItem("expires_at") || "";
   if (str=="") return false; //chưa dn    
   const expiresAt = JSON.parse(str);    
   return moment().isBefore(moment(expiresAt));
 }
}
