import { Empresa } from './../../interface/empresa';
import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Projeto } from '../../interface/projeto';
import { ProjetoService } from '../../service/projeto.service';
import { RouterModule } from '@angular/router';
import { ModalButtonComponent, ModalEnviarArquivoComponent } from '../gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component'
import { EmpresaService } from '../../service/empresa.service';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [NgFor, RouterModule, ModalButtonComponent, ModalEnviarArquivoComponent],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit  {

  usuarioAutenticado : Usuario | null = null;
  private usuarioAutenticadoSubscription!: Subscription;

  constructor(private projetoService :ProjetoService, private empresaService : EmpresaService, private usuarioService: UsuarioService, private router: Router){ }

  listaProjetos : Projeto[]=[];
  listaEmpresas : Empresa[]=[];

  idEmpresaSelecionada! : number;

  ngOnInit(): void {
    let usuarioId = 4; //get usuario de session ID
    this.getEmpresas(usuarioId);
  }

  selecionarEmpresa(idEmpresa: any){
    this.listaProjetos = [];
    this.idEmpresaSelecionada = idEmpresa.target.value;
    this.getProjetosDeEmpresaId(idEmpresa.target.value);
    this.getOneEmpresa(idEmpresa.target.value);
  }

  getEmpresas(idUsuario: number):void{
    this.listaEmpresas =[];
    this.empresaService.getEmpresaByUsuarioId(idUsuario).subscribe({
      next:(response) =>{
        response && (this.listaEmpresas = response);
      },
        error: (error) => console.log(error),
    })
    //se o usuario não for superAdmin só terá uma única empresa vinculada
    if (this.listaEmpresas.length == 1){
      this.getProjetosUsuarioId(idUsuario);
      this.projetoService.setEmpresaSelecionada(this.listaEmpresas[0]);
    }
  }

  getProjetosUsuarioId(idUsuario: number) : void {
    this.listaProjetos = [];
    this.projetoService.findProjetosDaEmpresaDoUsuarioId(idUsuario).subscribe({
      next:(response) =>{
        response && (this.listaProjetos = response);
      },
        error: (error) => console.log(error),
    })
  }

  getProjetosDeEmpresaId(idEmpresa: number) : void {
    if(idEmpresa != -999){
      this.projetoService.findProjetosDaEmpresaId(idEmpresa).subscribe({
        next:(response) =>{
          response && (this.listaProjetos = response);
        },
          error: (error) => console.log(error),
      })
    }
  }

  getOneEmpresa(idEmpresa: number): void {
    if(idEmpresa != -999){
      this.empresaService.getEmpresaById(idEmpresa).subscribe({
        next:(response) =>{
          this.projetoService.setEmpresaSelecionada(response);
        },
        error: (error) => console.log(error),
      })
    }
  }


  listaCompartilhada(){
    this.router.navigate(['/listaCompartilhada'])
  }

}


