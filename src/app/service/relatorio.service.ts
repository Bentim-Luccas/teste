import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Relatorio } from '../interface/relatorio';
import { environment } from '../../environments/environment';
import { Arquivo } from '../interface/arquivo';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private apiUrl = 'http://localhost:3000/relatorios';

  constructor(private http: HttpClient) {}

  getProjetoComArquivos(disciplinaId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/projeto/${disciplinaId}`);
  }
  getArquivos(): Observable<Arquivo[]> {
    return this.http.get<Arquivo[]>(this.apiUrl);
  }




}
