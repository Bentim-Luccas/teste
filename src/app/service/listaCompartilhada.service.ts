import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class ListaCompartilhadaService {
  private readonly baseUrl: string;

  constructor(private httpCliente: HttpClient) {
    this.baseUrl = environment.apiServer+'lista-compartilhada';
  }

  getListaCompartilhada(): Observable<any> {
    return this.httpCliente.get<any>(`${this.baseUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
