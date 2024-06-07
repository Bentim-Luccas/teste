import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../service/projeto.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Projeto } from '../../interface/projeto';
import { RouterModule } from '@angular/router';
import { EmpresaService } from '../../service/empresa.service';
import { Empresa } from '../../interface/empresa';

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
    this.carregarProjeto();
  }

  carregarProjeto() {
    this.projetoService.findAll().subscribe(
      (projeto: any) => {
        this.projeto = projeto;
        // Carregar nome da empresa para cada projeto
        this.loadEmpresaName(projeto);
      },
      (error: any) => {
        console.error('Erro ao carregar projeto:', error);
      }
    );
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
