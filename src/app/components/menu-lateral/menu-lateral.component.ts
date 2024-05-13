import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { EmpresaService } from '../../service/empresa.service';
import { Empresa } from '../../interface/empresa';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [NgFor],
  template: `<li *ngFor="let usuarios of usuarioresponse"></li>`,
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit  {

  



  constructor ( private empresaservice :EmpresaService){}

 empresa! : Empresa[];
  ngOnInit(): void {
    this.getEmpresa();
  }
  getEmpresa():void{
    this.empresaservice.getEmpresa().subscribe({
      next:(response) =>{
        response && (this.empresa = response);
      },
        error: (error) => console.log(error),
    })
  }
  
}