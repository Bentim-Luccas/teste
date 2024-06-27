import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
// import { Markup } from '../interface/markup';
import { ComentarioMarkup } from "../interface/comentario_markup";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})
export class MarkupService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiServer}markup`;
  }

  // post(markup: Markup): Observable<Markup> {
  //   return this.http.post<Markup>(this.baseUrl, markup, httpOptions);
  // }

  findAll(idArquivo:string): Observable<ComentarioMarkup[]> {
    return this.http.get<ComentarioMarkup[]>(this.baseUrl+'/'+idArquivo);
  }

  // findOne(id: number): Observable<Markup> {
  //   return this.http.get<Markup>(`${this.baseUrl}/${id}`);
  // }

  // remove(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/${id}`);
  // }
}
