import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";




@Injectable({
    providedIn:'root'
})
export class ListaCompartilhadaService{
constructor(private httpCliente:HttpClient){ }
    getListaCompartilhada(): Observable<any>{
        return this.httpCliente.get("http://academico3.rj.senac.br/lista-compartilhada",{}); 
    }





}