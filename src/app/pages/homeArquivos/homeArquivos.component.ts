import { Component, Input, OnInit } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { HomeArquivosComponentsComponent } from '../../components/home-arquivos-components/home-arquivos-components.component';
import { ModalCriarProjetoComponent } from '../../components/home-arquivos-components/modal-criar-projeto/modal-criar-projeto.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { EmpresaService } from '../../service/empresa.service';
import { Empresa } from '../../interface/empresa';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import { PermissionamentoService } from '../../service/permissionamento.service';
import { PermissionamentoUsuario } from '../../interface/permissionamento-usuario';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { Projeto } from '../../interface/projeto';
import { ProjetoService } from '../../service/projeto.service';
import { BtnModalCriarProjeto } from "../../components/home-arquivos-components/modal-criar-projeto/button/btn--modal-criar-projeto.component";
import { BarraPesquisaComponent } from "../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component";
import { ButtonModalEditarProjeto } from "../../components/home-arquivos-components/modal-editar-projeto/button/btn-modal-editar-projeto.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './homeArquivos.component.html',
    styleUrls: ['./homeArquivos.component.css'],
    imports: [
        ComentarioComponent,
        TabsComponent,
        NavbarComponent,
        MenuLateralComponent,
        HomeArquivosComponentsComponent,
        ModalCriarProjetoComponent,
        BreadcrumbComponent,
        BreadcrumbItemDirective,
        CommonModule,
        RouterModule,
        BtnModalCriarProjeto,
        BarraPesquisaComponent,
        ButtonModalEditarProjeto
    ]
})
export class HomeComponent implements OnInit {

  email: string | null = null;
  idUsuario!: number;
  empresa!: Empresa;
  permissionamento: PermissionamentoUsuario[] = [];
  lista = [];
  projetos: Projeto[]=[];

  constructor(
    private empresaService: EmpresaService,
    private projetoService: ProjetoService,
    private usuarioService: UsuarioService,
    private permissionamentoService: PermissionamentoService,
    private route: Router
  ) {}

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
  }

  fetchProject(id: number): void {
    this.permissionamentoService.getProjectById(id).subscribe((data: PermissionamentoUsuario[]) => {
      this.permissionamento = data;
    });
  }

  onSelect(project: any): void {
    this.permissionamentoService.setSelectedObject(project);
    this.route.navigate(['/disciplinas']);
  }

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