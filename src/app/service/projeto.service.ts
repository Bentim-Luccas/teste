import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Projeto } from "../interface/projeto";
import { Observable, catchError, throwError } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'aplication/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class ProjetoService {
    private readonly baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiServer + 'projeto';
    }

    post(projeto: Projeto): Observable<Projeto> {
        return this.http.post<Projeto>(this.baseUrl, projeto, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    findAll(): Observable<Projeto[]> {
        return this.http.get<Projeto[]>(this.baseUrl).pipe(
            catchError(this.handleError)
        )
    }

    findOne(id: number): Observable<Projeto> {
        return this.http.get<Projeto>(`${this.baseUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    patch(id: number, alteracoes: Partial<Projeto>): Observable<Projeto> {
        return this.http.patch<Projeto>(`${this.baseUrl}/${id}`, alteracoes, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    remove(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<never> {
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
            errorMessage = 'Ocorreu um erro: ' + error.error.message;
        } else {
            errorMessage = `O backend retornou o código ${error.status}: ${error.message}`
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }


    /* ======================= Services Baseados no Usuário ====================== */

    findProjetosDaEmpresaDoUsuarioId(idUsuario: number): Observable<Projeto[]> {
      return this.http.get<Projeto[]>(`${this.baseUrl}/projetosDaEmpresaDoUsuarioId/${idUsuario}`).pipe(
          catchError(this.handleError)
      );
    }


}
