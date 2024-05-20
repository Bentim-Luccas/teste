import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class FiltroService {
  private termoPesquisa = new BehaviorSubject<string>('');

  atualizarTermoPesquisa(novoValor: string) {
    this.termoPesquisa.next(novoValor);
  }

  obterTermoPesquisa(): Observable<string> {
    return this.termoPesquisa.asObservable();
  }
}