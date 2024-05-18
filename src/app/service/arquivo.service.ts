import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Arquivo } from '../interface/arquivo';
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
export class ArquivoService {

  private readonly baseUrl = `${API}arquivo`
  private arquivoSelecionadoSubject = new BehaviorSubject<Arquivo | null>(null);
  arquivoSelecionado$ = this.arquivoSelecionadoSubject.asObservable();

  constructor(private http: HttpClient) { }

  findAll() : Observable<Arquivo[]>  {
    return this.http.get<Arquivo[]>(this.baseUrl, httpOptions)
  }

  getVersoesPorId(arquivoId: string) : Observable<Arquivo[]> {
    return this.http.get<Arquivo[]>(`${this.baseUrl}/versoes/${arquivoId}`)
  }

  setArquivoSelecionado(arquivo: Arquivo | null) {
    this.arquivoSelecionadoSubject.next(arquivo);
  }

}
