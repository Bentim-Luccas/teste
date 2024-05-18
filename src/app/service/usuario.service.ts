import { Usuario } from './../interface/usuario';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from '../../environments/environment.development';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //Authorization: 'my-auth-token'
  })
};

const API = environment.apiServer

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly baseUrl = `${API}usuario`
  private usuarioSelecionadoSubject = new BehaviorSubject<Usuario | null>(null);
  usuarioSelecionado$ = this.usuarioSelecionadoSubject.asObservable();

  constructor(private http: HttpClient) { }

  findAll() : Observable<Usuario[]>  {
    return this.http.get<Usuario[]>(this.baseUrl, httpOptions)
  }

  findByid(id: number | undefined): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`, httpOptions)
  }

  setUsuarioSelecionado(usuario: Usuario | null) {
    this.usuarioSelecionadoSubject.next(usuario);
  }

}
