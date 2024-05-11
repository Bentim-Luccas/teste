import { Component } from '@angular/core';
import { ArquivoMenuDropdownComponent } from '../arquivo-menu-dropdown/arquivo-menu-dropdown.component'
import { TabsArquivosComponent } from '../tabs-arquivos/tabs-arquivos.component'

@Component({
  selector: 'app-tabela-arquivos',
  standalone: true,
  imports: [ArquivoMenuDropdownComponent, TabsArquivosComponent],
  templateUrl: './tabela-arquivos.component.html',
  styleUrl: './tabela-arquivos.component.css'
})
export class TabelaArquivosComponent {

  arquivos: Arquivo[] = [
    {
      nome: 'documento1',
      data: '16/04/2024',
      status: 'Aprovado'
    },
    {
      nome: 'planilha',
      data: '15/04/2024',
      status: 'Liberado'
    },
    {
      nome: 'foto',
      data: '14/04/2024',
      status: 'Aprovado'
    },
    {
      nome: 'apresentacao',
      data: '13/04/2024',
      status: 'Liberado'
    },
    {
      nome: 'codigo',
      data: '12/04/2024',
      status: 'Recusado'
    },
    {
      nome: 'contrato',
      data: '11/04/2024',
      status: 'Aprovado'
    },
    {
      nome: 'aula',
      data: '02/04/2024',
      status: 'Aprovado'
    },
    {
      nome: 'aula2',
      data: '23/04/2024',
      status: 'Recusado'
    }, {
      nome: 'material',
      data: '11/04/2024',
      status: 'Aprovado'
    },
  ]

  pastas: Pasta[] = [
    {
      nome: 'Documentos'
    },
    {
      nome: 'Planta Projeto'
    },
  ]
}

export class Arquivo {
  nome!: string;
  data!: string;
  status!: string;
}

export class Pasta {
  nome!: string;
}

