import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../service/projeto.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Projeto } from '../../interface/projeto';
import { RouterModule } from '@angular/router';
import { EmpresaService } from '../../service/empresa.service';
import { Empresa } from '../../interface/empresa';
import { Session } from 'node:inspector';

@Component({
  selector: 'app-home-arquivos-components',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-arquivos-components.component.html',
  styleUrl: './home-arquivos-components.component.css'
})
export class HomeArquivosComponentsComponent implements OnInit {
  constructor(private projetoService: ProjetoService,
    private empresaService: EmpresaService,
    private router: Router
  ) { }

  projeto!: Projeto[];

  ngOnInit(): void {
    this.carregarProjeto(4);
  }

  carregarProjeto(usuarioId: number) {
    this.projetoService.findProjetosDaEmpresaDoUsuarioId(usuarioId).subscribe({
      next: (projeto)=> {
        this.projeto = projeto;
        // Carregar nome da empresa para cada projeto
        this.loadEmpresaName(projeto);
      },
      error: (error)=> console.log(error),
    });
  }

  private loadEmpresaName(projetos: Projeto[]) {
    projetos.forEach((proj: Projeto) => {
      this.empresaService.GetEmpresaById(proj.empresa_id).subscribe(
        (empresa: Empresa) => {
          proj.empresa_nome = empresa.empresa_nome;
        },
        (error: any) => {
          console.error('Erro ao carregar nome da empresa:', error);
        }
      );
    });
  }

  toggleDropdown(projeto: any): void {
    projeto.dropdownOpen = !projeto.dropdownOpen;
  }

}
