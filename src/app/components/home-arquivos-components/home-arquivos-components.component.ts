import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ProjetoService } from '../../service/projeto.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from '../../interface/projeto';
import { Empresa } from '../../interface/empresa';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../interface/usuario';
import { PermissionamentoUsuario } from '../../interface/permissionamento-usuario';
import { PermissionamentoService } from '../../service/permissionamento.service';
import { ModalEditProjetoComponent } from "./modal-edit-projeto/modal-edit-projeto.component";

@Component({
    selector: 'app-home-arquivos-components',
    standalone: true,
    templateUrl: './home-arquivos-components.component.html',
    styleUrl: './home-arquivos-components.component.css',
    imports: [CommonModule, ModalEditProjetoComponent]
})
export class HomeArquivosComponentsComponent implements OnInit {

  /**
  empresa!: Empresa;
  lista = [];
  empresaSelecionada : Empresa| null = null;
  private empresaSubscription!: Subscription;
  usuarioAutenticado : Usuario | null = null;
  private usuarioAutenticadoSubscription!: Subscription;

  constructor(private projetoService: ProjetoService, usuarioService: UsuarioService, private router: Router) {
    this.usuarioAutenticadoSubscription = usuarioService.usuarioAutenticado$.subscribe(
      usuario => {
        this.usuarioAutenticado = usuario;
      }
    )
  }

  ngOnInit(): void {
    let usuarioId = 4;
    let usuarioTipo = 2;   //1=comun e admin | 2=superadmin
    this.getEmpresa(usuarioId, usuarioTipo);
    this.carregarProjeto(4, 4);
  }
  
  carregarProjeto(empresaId: number, usuarioId: number) {
    this.projetoService.findProjetosDaEmpresaIdDoUsuarioId(empresaId ,usuarioId).subscribe({
      next: (projetos)=> {
        this.projetos = projetos;
      },
      error: (error)=> console.log(error),
    });
  }

  carregarProjetoSuperAdmin(empresaId: number) {
    this.projetoService.findProjetosDaEmpresaId(empresaId).subscribe({
      next: (projetos)=> {
        this.projetos = projetos;
      },
      error: (error)=> console.log(error),
    });
  }
  */

  email: string | null = null;
  idUsuario!: number;
  permissionamento: PermissionamentoUsuario[] = [];
  projetos: Projeto[] = [];
  openedDropdownId: number | null = null;

  constructor(
    private projetoService: ProjetoService,
    private usuarioService: UsuarioService,
    private permissionamentoService: PermissionamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private elementRef: ElementRef,
  ) { }

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
    this.openedDropdownId = null;
  }


  toggleDropdown(projetoId: number | null) {
    if (this.openedDropdownId === projetoId) {
      this.openedDropdownId = null; // Fecha o dropdown se já estiver aberto
    } else {
      this.openedDropdownId = projetoId; // Abre o dropdown se estiver fechado
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.openedDropdownId = null; // Fecha o dropdown se clicar fora do card
    }
  }

}
