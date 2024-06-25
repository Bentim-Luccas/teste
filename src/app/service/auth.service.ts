import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, delay } from 'rxjs'
import { Router } from '@angular/router';
import { Email } from '../interface/email';
import { Token } from '../interface/token';
import { JWT_Token } from '../interface/jwt_token';
import { EmailTokenRecebido } from '../interface/emailtoken_recebido';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http:HttpClient, private router: Router) { }
  baseurl = 'http://academico3.rj.senac.br/';
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      
    })
  };

  loginEmail(email:Email):Observable<EmailTokenRecebido>{
    const obs = this.http.post<EmailTokenRecebido>(this.baseurl+'auth/login_email',email)
    // if(obs){
    //   if( !this.getTokenByEmail(email).subscribe()){
    //       this.gerarToken(email).subscribe()
    //   }
      
    // }
    return obs

  }


  private gerarToken(email:string):Observable<Token>{
    var aleatorio = Math.random().toString(36).substring(2);
    var token = new Token(aleatorio,email)
    return this.http.post<Token>(this.baseurl + 'token/', JSON.stringify(token),this.httpOptions)
  }

  getTokenByEmail(email:string):Observable<Token>{
    return this.http.get<Token>(this.baseurl+'token?email='+email)
  }
  
  loginToken(token:Token):Observable<JWT_Token>{
    return this.http.post<JWT_Token>(this.baseurl+'auth/login_token', token)
  }

  verificarJWTToken(jwt:JWT_Token):Observable<Boolean>{
    return this.http.post<Boolean>(this.baseurl+'auth/check_jwt',jwt)
  }
}
