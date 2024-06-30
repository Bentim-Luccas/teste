import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../service/projeto.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Projeto } from '../../interface/projeto';
import { RouterModule } from '@angular/router';
import { Empresa } from '../../interface/empresa';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import { ButtonModalEditarProjeto } from "./modal-editar-projeto/button/btn-modal-editar-projeto.component";
import { PermissionamentoUsuario } from '../../interface/permissionamento-usuario';
import { EmpresaService } from '../../service/empresa.service';
import { PermissionamentoService } from '../../service/permissionamento.service';

@Component({
    selector: 'app-home-arquivos-components',
    standalone: true,
    templateUrl: './home-arquivos-components.component.html',
    styleUrl: './home-arquivos-components.component.css',
    imports: [CommonModule, RouterModule, ButtonModalEditarProjeto]
})
export class HomeArquivosComponentsComponent implements OnInit {

  projetos: Projeto[]=[];
  empresaSelecionada : Empresa| null = null;
  email: string | null = null;
  idUsuario!: number;
  empresa!: Empresa;
  permissionamento: PermissionamentoUsuario[] = [];
  lista = [];

  usuarioAutenticado : Usuario | null = null;
  private usuarioAutenticadoSubscription!: Subscription;

  constructor(private projetoService: ProjetoService,
    private usuarioService: UsuarioService,
    private empresaService: EmpresaService,
    private permissionamentoService: PermissionamentoService,
    private router: Router) {
    //
    // this.usuarioAutenticadoSubscription = usuarioService.usuarioAutenticado$.subscribe(
    //  usuario => {
    //    this.usuarioAutenticado = usuario;
    //  }
    // )
  }

  ngOnInit(): void {
      this.email = sessionStorage.getItem('email');
      if (this.email) {
        this.usuarioService.getUsuarioPorEmail(this.email).subscribe(
          (usuario) => {
            this.idUsuario = usuario?.usuario_id;
            sessionStorage.setItem("id", this.idUsuario.toString());
            this.fetchProject(this.idUsuario);
          },
          (error) => {
            console.error('Erro ao buscar usuário pelo email', error);
          }
        );
      }
    /**
    let usuarioId = 4;
    let usuarioTipo = 2;   //1=comun e admin | 2=superadmin
    this.getEmpresa(usuarioId, usuarioTipo); */
    // this.carregarProjeto(4, 4);
  }

  fetchProject(id: number): void {
    this.permissionamentoService.getProjectById(id).subscribe((data: PermissionamentoUsuario[]) => {
      this.permissionamento = data;
    });
  }

  onSelect(project: any): void {
    this.permissionamentoService.setSelectedObject(project);
    this.router.navigate(['/disciplinas']);
  }

  /**
  getEmpresa(usuarioId: number, usuarioTipo: number): void {
    this.empresaSubscription = this.projetoService.empresaSelecionada$.subscribe(
      empresa => {
        this.empresaSelecionada = empresa;
        if (empresa) {
          if(usuarioTipo==1 || usuarioTipo==2){
            this.carregarProjeto(empresa.empresa_id, usuarioId);
          }
          else if(usuarioTipo==3){
            this.carregarProjetoSuperAdmin(empresa.empresa_id);
          }
        }
      }
    );
  }
  */

  carregarProjeto(empresaId: number, usuarioId: number) {
    this.projetoService.findProjetosDaEmpresaIdDoUsuarioId(empresaId ,usuarioId).subscribe({
      next: (projetos)=> {
        this.projetos = projetos;
      },
      error: (error)=> console.log(error),
    });
  }

  /**
  carregarProjetoSuperAdmin(empresaId: number) {
    this.projetoService.findProjetosDaEmpresaId(empresaId).subscribe({
      next: (projetos)=> {
        this.projetos = projetos;
      },
      error: (error)=> console.log(error),
    });
  }
  */

  deletarProjeto(idProjeto: number | undefined): void {
    if (idProjeto === undefined) {
        console.error("Não é possível excluir o projeto: idProjeto está indefinido");
        return;
    }
    this.projetoService.remove(idProjeto).subscribe(() => {
        this.projetos = this.projetos.filter(
            (p) => p.projeto_id !== idProjeto
        );
    });
}

  toggleDropdown(projeto: any): void {
    projeto.dropdownOpen = !projeto.dropdownOpen;
  }

}
