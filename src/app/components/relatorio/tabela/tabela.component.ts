import { Component, OnInit } from '@angular/core';
import { Arquivo } from '../../../interface/arquivo';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx';
import { Projeto } from '../../../interface/projeto';
import { ProjetoService } from '../../../service/projeto.service';
import { Empresa } from '../../../interface/empresa';
import { FormsModule } from '@angular/forms';
import { EmpresaService } from '../../../service/empresa.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjetoComDisciplinas } from '../../../interface/ProjetoComDisciplinas';

@Component({
  selector: 'app-tabela',
  standalone: true,
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  imports: [CommonModule,FormsModule]

})
export class TabelaComponent implements OnInit {
    listaArquivos: Arquivo[] = [];
    projetos: Projeto[] = [];
    empresas: Empresa[] = [];
    selectedEmpresaId: number | null = null;

   constructor(private empresaService: EmpresaService,
    private projetoService: ProjetoService) { }

    ngOnInit(): void {
      this.projetoService.getProjetos().subscribe(projetos => {
        this.projetos = projetos;
        console.log('Projetos carregados:', this.projetos);
      });
    }

    // onEmpresaChange(): void {
    //   if (this.selectedEmpresaId !== null) {
    //     this.projetoService.getProjetos(this.selectedEmpresaId).subscribe(projetos => {
    //       this.projetos = projetos;
    //     });
    //   }
    // }


  // carregarProjetoDescricao(arquivos: Arquivo[]): void {
  //   arquivos.forEach((arquivo: Arquivo) => {
  //     this.projetoService.findOne(arquivo.projeto_id).subscribe(
  //       (projeto: Projeto) => {
  //         if (projeto) {
  //           arquivo.projeto_descricao = projeto.projeto_descricao || ''; // Atribui a descrição do projeto ao arquivo
  //         } else {
  //           arquivo.projeto_descricao = ''; // Se não encontrar projeto, deixa vazio
  //         }
  //       },
  //       (error: any) => {
  //         console.error(`Erro ao carregar descrição do projeto ${arquivo.projeto_id}:`, error);
  //         arquivo.projeto_descricao = ''; // Trata erro, deixando o campo vazio
  //       }
  //     );
  //   });
  // }


  gerarRelatorio(): void {
    const dadosTabela: any[] = [];

    const headers: string[] = ['Projeto','', 'Disciplina', 'Etapa', 'Status'];


    this.listaArquivos.forEach(arquivo => {
      const rowData: any[] = [
        arquivo.arquivo_descricao,
        this.stringToDate(arquivo.arquivo_data).toLocaleDateString(),
        // arquivo.projeto_descricao || '',
        // arquivo.etapa_descricao || '',
        arquivo.autor
      ];
      dadosTabela.push(rowData);
    });

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([headers].concat(dadosTabela));

    XLSX.utils.book_append_sheet(wb, ws, 'Relatório');

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'relatorio.xlsx';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }

  stringToDate(stringDate: string | Date): Date {
    return new Date(stringDate);
  }
}
