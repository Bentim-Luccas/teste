import { Empresa } from './../../interface/empresa';
import { Component,OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Projeto } from '../../interface/projeto';
import { ProjetoService } from '../../service/projeto.service';
import { RouterModule } from '@angular/router';
import { ModalButtonComponent, ModalEnviarArquivoComponent } from '../gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component'
import { EmpresaService } from '../../service/empresa.service';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisciplinaService } from '../../service/disciplina.service';
@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule, ModalButtonComponent, ReactiveFormsModule, ModalEnviarArquivoComponent],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit  {

  usuarioAutenticado : Usuario | null = null;
  private usuarioAutenticadoSubscription!: Subscription;

  constructor(private projetoService :ProjetoService, private disciplinaService: DisciplinaService,private empresaService : EmpresaService, private usuarioService: UsuarioService, private router: Router){ }

  listaProjetos : Projeto[]=[];
  listaEmpresas : Empresa[]=[];

  formBusca = new FormGroup({
    empresa_nome : new FormControl('')
  });

  idEmpresaSelecionada! : number;
  empresaId!: number
  isEmpresaSelected: boolean = false;

  ngOnInit(): void {
    // let usuarioId = 4; //get usuario de session ID
    // this.getEmpresas(usuarioId);
  }


  buscaEmpresaPorNome(){
    console.log(this.formBusca.value.empresa_nome);
    this.getEmpresaPorNome(<string>this.formBusca.value.empresa_nome);
  }



  //--------------------------------------------
  //----Buscando Empresa por nome no endpoint---
  //--------------------------------------------
   getEmpresaPorNome(nomeEmpresa: string): void {
     if(nomeEmpresa.length!=0){
       this.empresaService.getEmpresaByNome(nomeEmpresa).subscribe({
         next:(response) =>{
         console.log(response);
         this.listaEmpresas = response;
       },
       error: (error) => console.log(error),
      })
     }
   }
   
  //  getProjetosdaEmpresa(empresaid: number) :void{
  //   this.projetoService.findProjetosDaEmpresaId(empresaid).subscribe({
  //     next:(response)=>{
  //       response && (this.listaProjetos=response);
  //       this.listaProjetos.forEach(listaProjetos=>{
  //         this.disciplinaService.
  //       })
  //     }
  //   })
  //  }



  // selecionarEmpresa(idEmpresa: number){
  //   this.listaProjetos = [];
  //   this.idEmpresaSelecionada = idEmpresa;
  //   this.getProjetosDeEmpresaId(idEmpresa);
  //   this.getOneEmpresa(idEmpresa);
  //   this.isEmpresaSelected = true;
  // }



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
  usuarios() {
    this.router.navigate(['/usuarios'])
  }
  empresas() {
    this.router.navigate(['/'])
  }
}
