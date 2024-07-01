import { Component, Input, OnInit } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { BarraPesquisaProjetoComponent } from '../../components/home-arquivos-components/barra-pesquisa-projeto/barra-pesquisa-projeto.component';
import { HomeArquivosComponentsComponent } from '../../components/home-arquivos-components/home-arquivos-components.component';
import { ModalCriarProjetoComponent } from '../../components/home-arquivos-components/modal-criar-projeto/modal-criar-projeto.component';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { EmpresaService } from '../../service/empresa.service';
import { Empresa } from '../../interface/empresa';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import { PermissionamentoService } from '../../service/permissionamento.service';
import { PermissionamentoUsuario } from '../../interface/permissionamento-usuario';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { BtnModalEditarProjeto } from "../../components/home-arquivos-components/modal-editar-projeto/button/btn-modal-editar-projeto.component";
import { BtnModalCriarProjeto } from "../../components/home-arquivos-components/modal-criar-projeto/button/btn-modal-criar-projeto.component";
import { Projeto } from '../../interface/projeto';
import { ProjetoService } from '../../service/projeto.service';
import { BarraPesquisaComponent } from "../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component";

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
        BarraPesquisaProjetoComponent,
        HomeArquivosComponentsComponent,
        ModalCriarProjetoComponent,
        BreadcrumbComponent,
        BreadcrumbItemDirective,
        CommonModule,
        RouterModule,
        BtnModalEditarProjeto,
        BtnModalCriarProjeto,
        BarraPesquisaComponent
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
    private router: Router,
    private route: ActivatedRoute
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

  onSelect(project: PermissionamentoUsuario): void {
    const id = project.projeto_id
    this.router.navigate(['/disciplinas', id]);
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
