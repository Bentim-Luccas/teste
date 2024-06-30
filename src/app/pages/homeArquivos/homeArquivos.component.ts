import { Component, Input, OnInit } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { BarraPesquisaProjetoComponent } from '../../components/home-arquivos-components/barra-pesquisa-projeto/barra-pesquisa-projeto.component';
import { HomeArquivosComponentsComponent } from '../../components/home-arquivos-components/home-arquivos-components.component';
import { ButtonModalCriarProjeto } from '../../components/home-arquivos-components/modal-criar-projeto/button/button-modal-criar-projeto.component';
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
    ButtonModalCriarProjeto,
    ModalCriarProjetoComponent,
    BreadcrumbComponent,
    BreadcrumbItemDirective,
    CommonModule,
    RouterModule
  ],
})
export class HomeComponent implements OnInit {

  email: string | null = null;
  idUsuario!: number;
  empresa!: Empresa;
  permissionamento: PermissionamentoUsuario[] = [];
  lista = [];

  constructor(
    private empresaService: EmpresaService,
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
}
