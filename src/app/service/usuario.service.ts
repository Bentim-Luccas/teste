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
  private autorSelecionadoSubject = new BehaviorSubject<Usuario | null>(null);
  autor$ = this.autorSelecionadoSubject.asObservable();
  private revisorSelecionadoSubject = new BehaviorSubject<Usuario | null>(null);
  revisor$ = this.revisorSelecionadoSubject.asObservable();

  constructor(private http: HttpClient) { }

  findAll() : Observable<Usuario[]>  {
    return this.http.get<Usuario[]>(this.baseUrl, httpOptions)
  }

  findByid(id: number | undefined): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`, httpOptions)
  }

  setAutor(usuario: Usuario | null) {
    this.autorSelecionadoSubject.next(usuario);
  }

  setRevisor(usuario: Usuario | null) {
    this.revisorSelecionadoSubject.next(usuario);
  }

}
