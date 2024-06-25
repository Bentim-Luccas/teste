import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";


@Injectable({
    providedIn:'root'
})
export class ListaCompartilhadaService{
  private readonly baseUrl: string;

  constructor(private httpCliente:HttpClient){
  this.baseUrl = environment.apiServer + 'lista-compartilhada';
  }
  getListaCompartilhada(): Observable<any>{
    return this.httpCliente.get(this.baseUrl,{}); // mudar o endereço quando tiver o endpoint estiver no Academico3
  }

}
