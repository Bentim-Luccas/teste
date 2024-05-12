import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Arquivo } from '../interface/arquivo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  private readonly baseUrl = 'http://localhost:3000/arquivo'
  private arquivoSelecionadoSubject = new BehaviorSubject<Arquivo | null>(null);
  arquivoSelecionado$ = this.arquivoSelecionadoSubject.asObservable();

  constructor(private http: HttpClient) { }

  findAll() : Observable<Arquivo[]>  {
    return this.http.get<Arquivo[]>(this.baseUrl, httpOptions)
  }

  setArquivoSelecionado(arquivo: Arquivo | null) {
    this.arquivoSelecionadoSubject.next(arquivo);
  }

}
