import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ArquivoService{

    constructor(private httpCliente:HttpClient){ }

    getArquivo(): Observable<any>{
        return this.httpCliente.get("http://academico3.rj.senac.br/arquivo",{}); 
    }

}