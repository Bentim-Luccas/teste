import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Projeto } from "../interface/projeto";
import { BehaviorSubject, Observable, catchError, throwError } from "rxjs";
import { Empresa } from "../interface/empresa";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'aplication/json',
        //'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    })
};

@Injectable({
    providedIn: 'root'
})
export class ProjetoService {

    private readonly baseUrl: string;

    private projetoSelecionadoSubject = new BehaviorSubject<Projeto | null>(null);
    projetoSelecionado$ = this.projetoSelecionadoSubject.asObservable();

    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiServer + 'projeto';
    }

    cadastrarProjeto(projeto: Projeto): Observable<Projeto> {
        return this.http.post<Projeto>(this.baseUrl, projeto).pipe(
            catchError(this.handleError)
        );
    }

    getProjetos(): Observable<Projeto[]> {
        return this.http.get<Projeto[]>(this.baseUrl).pipe(
            catchError(this.handleError)
        )
    }

    getProjetoById(id: number): Observable<Projeto> {
        return this.http.get<Projeto>(`${this.baseUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    atualizarProjeto(projeto: Projeto, idProjeto: number): Observable<Projeto> {
        return this.http.put<Projeto>(`${this.baseUrl}/${idProjeto}`, projeto).pipe(
            catchError(this.handleError)
        );
    }

    excluirProjeto(id: number): Observable<void> {
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

    getProjetosDaEmpresaId(idEmpresa: number): Observable<Projeto[]> {
        return this.http.get<Projeto[]>(`${this.baseUrl}/empresa/${idEmpresa}`).pipe(
            catchError(this.handleError)
        );
    }

    getProjetosDaEmpresaDoUsuarioId(idUsuario: number): Observable<Projeto[]> {
        return this.http.get<Projeto[]>(`${this.baseUrl}/projetosDaEmpresaDoUsuarioId/${idUsuario}`).pipe(
            catchError(this.handleError)
        );
    }

    /* ======================== Service para comunicação de componentes=========== */

    setProjetoSelecionado(projeto: Projeto | null) {
        this.projetoSelecionadoSubject.next(projeto);
    }

}
