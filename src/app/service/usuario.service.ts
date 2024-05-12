import { Usuario } from './../interface/usuario';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly baseUrl = 'http://localhost:3000/usuario'

  constructor(private http: HttpClient) { }

  findAll() : Observable<Usuario[]>  {
    return this.http.get<Usuario[]>(this.baseUrl, httpOptions)
  }

  findByid(id: number | undefined): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`, httpOptions)
  }

}
