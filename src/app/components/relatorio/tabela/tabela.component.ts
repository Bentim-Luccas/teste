import { Component, OnInit } from '@angular/core';
import { Arquivo } from '../../../interface/arquivo';
import { CommonModule, formatDate } from '@angular/common';
import * as XLSX from 'xlsx';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjetoComDisciplinas } from '../../../interface/ProjetoComDisciplinas';
import { Projeto } from '../../../interface/projeto';
import { forkJoin } from 'rxjs';
import { RelatorioService } from '../../../service/relatorio.service';
@Component({
  selector: 'app-tabela',
  standalone: true,
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  imports: [CommonModule,
    FormsModule,
     ReactiveFormsModule ]

})
export class TabelaComponent implements OnInit {
    listaArquivos: Arquivo[] = [];
    projetosDisciplinas: ProjetoComDisciplinas[] = [];
    empresaControl = new FormControl();
    projetos: (Projeto & { disciplinas_ativas: number; disciplinas_inativas: number; projeto_status: number; })[] = [];
    dadosCarregados = false;
   constructor(private relatorioService: RelatorioService) {}

   ngOnInit(): void {
    this.loadDados(4);
  }

  loadDados(idEmpresa: number): void {
    forkJoin({
      projetosBasicos: this.relatorioService.findProjetosDaEmpresaId(idEmpresa),
      projetosComDisciplinas: this.relatorioService.getProjetosComDisciplinas(idEmpresa)
    }).subscribe({
      next: ({ projetosBasicos, projetosComDisciplinas }) => {
        this.projetos = projetosBasicos.map(projeto => {
          const disciplinas = projetosComDisciplinas.find(p => p.projeto_id === projeto.projeto_id) || {
            disciplinas_ativas: 0,
            disciplinas_inativas: 0
          };
          return {
            ...projeto,
            disciplinas_ativas: disciplinas.disciplinas_ativas,
            disciplinas_inativas: disciplinas.disciplinas_inativas
          };
        });
        this.dadosCarregados = true; // Correto: definindo dentro do subscribe
      },
      error: error => {
        console.error('Erro ao carregar dados:', error);
        this.dadosCarregados = false;
      }
    });
  }


  GerarRelatorio(): void {
    console.log("Exportando os seguintes projetos:", this.projetos); // Log para depuração
    if (this.loadDados.length === 0) {
      alert('Não há dados para exportar.');
      return;
    }
    const dataForExport = this.projetos.map(projeto => ({
      'Descrição do Projeto': projeto.projeto_descricao,
      'Disciplinas Ativas': projeto.disciplinas_ativas,
      'Disciplinas Inativas': projeto.disciplinas_inativas,
      'Data de Início': projeto.projeto_data_inicio ? formatDate(projeto.projeto_data_inicio, 'mediumDate', 'pt-BR') : '',
      'Data de Fim': projeto.projeto_data_fim ? formatDate(projeto.projeto_data_fim, 'mediumDate', 'pt-BR') : '',
      'Orçamento': projeto.projeto_orcamento ? projeto.projeto_orcamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'Não informado'
    }));

    // Criando a planilha
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataForExport);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'ProjetosExportados');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    const fileURL: string = window.URL.createObjectURL(data);
    const anchor = document.createElement('a');
    anchor.href = fileURL;
    anchor.setAttribute('download', `${fileName}.xlsx`);
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

}
