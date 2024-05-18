import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
    providedIn:'root'
})
export class EmpresaService{
constructor(private httpCliente:HttpClient){ }
    getEmpresa(): Observable<any>{
        return this.httpCliente.get("http://academico3.rj.senac.br/Empresa",{});
    }




}