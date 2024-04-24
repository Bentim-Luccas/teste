import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuMoreVertComponent } from './menu-more-vert/menu-more-vert.component'

@Component({
  selector: 'app-file-table',
  standalone: true,
  imports: [CommonModule, MatIconModule, MenuMoreVertComponent],
  templateUrl: './file-table.component.html',
  styleUrl: './file-table.component.css'
})

export class FileTableComponent {

  arquivos: Arquivo[] = [
    {
      nome: 'documento1.txt',
      tamanho: '256 KB',
      versao: '1.0',
      dataAtualizacao: '16/04/2024',
      status: 'Aprovado'
    },
    {
      nome: 'planilha.xlsx',
      tamanho: '512 KB',
      versao: '2.1',
      dataAtualizacao: '15/04/2024',
      status: 'Liberado'
    },
    {
      nome: 'foto.jpg',
      tamanho: '1 MB',
      versao: '1.5',
      dataAtualizacao: '14/04/2024',
      status: 'Aprovado'
    },
    {
      nome: 'apresentacao.pptx',
      tamanho: '768 KB',
      versao: '3.2',
      dataAtualizacao: '13/04/2024',
      status: 'Liberado'
    },
    {
      nome: 'codigo.js',
      tamanho: '128 KB',
      versao: '1.2',
      dataAtualizacao: '12/04/2024',
      status: 'Recusado'
    },
    {
      nome: 'contrato.pdf',
      tamanho: '2 MB',
      versao: '2.0',
      dataAtualizacao: '11/04/2024',
      status: 'Aprovado'
    },
    {
      nome: 'aula.pdf',
      tamanho: '5 MB',
      versao: '1.0',
      dataAtualizacao: '02/04/2024',
      status: 'Aprovado'
    },
    {
      nome: 'aula2.pdf',
      tamanho: '26 MB',
      versao: '2.8',
      dataAtualizacao: '23/04/2024',
      status: 'Recusado'
    }, {
      nome: 'material.pdf',
      tamanho: '2 MB',
      versao: '2.0',
      dataAtualizacao: '11/04/2024',
      status: 'Aprovado'
    },
  ]
}

// CLASSE PARA MOCK DE TESTES - APAGAR DEPOIS
export class Arquivo {
  nome!: string;
  tamanho!: string;
  versao!: string;
  dataAtualizacao!: string;
  status!: string;
}
