import { Component, OnInit } from '@angular/core';
import { ArquivoMenuDropdownComponent } from '../arquivo-menu-dropdown/arquivo-menu-dropdown.component'
import { TabsArquivosComponent } from '../tabs-arquivos/tabs-arquivos.component'
import { ArquivoService } from '../../../service/arquivo.service';
import { Arquivo } from '../../../interface/arquivo';
import { log } from 'console';
import { CommonModule } from '@angular/common';
import { VersoesArquivoComponent } from './versoes-arquivo/versoes-arquivo.component';

@Component({
  selector: 'app-tabela-arquivos',
  standalone: true,
  imports: [ArquivoMenuDropdownComponent, TabsArquivosComponent, CommonModule, VersoesArquivoComponent],
  templateUrl: './tabela-arquivos.component.html',
  styleUrl: './tabela-arquivos.component.css'
})
export class TabelaArquivosComponent implements OnInit {

  listaArquivos: Arquivo[] = []
  usuarioId!: number;


  constructor(private arquivoService: ArquivoService) { }


  ngOnInit() {
    this.arquivoService.findAll().subscribe((data) => {
      this.listaArquivos = data
    })
  }

  // ngOnInit() {
  //   this.arquivoService.findAll().subscribe((data) => {
  //     this.listaArquivos = data.map(arquivo => ({ ...arquivo, mostrarDetalhes: false }));
  //   });
  // }


  detalharArquivo(arquivo: Arquivo) {
    console.log("setando o arquivo ", arquivo);
    this.arquivoService.setArquivoSelecionado(arquivo);

  }

  stringToDate(stringDate: string): Date {
    return new Date(stringDate);
  }






  pastas: Pasta[] = [
    {
      nome: 'Documentos'
    },
    {
      nome: 'Planta Projeto'
    },
  ]

    arquivosMockados: ArquivoMockado =
    {
      mostrarDetalhes: false,
    }
  ;



    mostrarVersoes(arquivo: Arquivo) {
      arquivo.mostrarDetalhes = !arquivo.mostrarDetalhes;
    }

}
export class Pasta {
  nome!: string;
}

export class ArquivoMockado {
  mostrarDetalhes!: boolean;
}

export class Versao {
  arquivo_descricao!: string;
  arquivo_data!: string;
  arquivo_versao!: number;
  arquivo_status!: string;
}
