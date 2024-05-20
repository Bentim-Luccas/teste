import { Component, OnInit } from '@angular/core';
import { ArquivoMenuDropdownComponent } from '../arquivo-menu-dropdown/arquivo-menu-dropdown.component'
import { TabsArquivosComponent } from '../tabs-arquivos/tabs-arquivos.component'
import { ArquivoService } from '../../../service/arquivo.service';
import { Arquivo } from '../../../interface/arquivo';
import { log } from 'console';
import { CommonModule } from '@angular/common';
import { VersoesArquivoComponent } from './versoes-arquivo/versoes-arquivo.component';
import { FiltroService } from '../../../service/filtro.service';

@Component({
  selector: 'app-tabela-arquivos',
  standalone: true,
  imports: [ArquivoMenuDropdownComponent, TabsArquivosComponent, CommonModule, VersoesArquivoComponent],
  templateUrl: './tabela-arquivos.component.html',
  styleUrl: './tabela-arquivos.component.css'
})
export class TabelaArquivosComponent implements OnInit {

  listaArquivos: Arquivo[] = []
  listaFiltrada: Arquivo[] = []
  termoPesquisa: string = ''
  usuarioId!: number


  constructor(private arquivoService: ArquivoService, private filtroService: FiltroService) {
    this.filtroService.obterTermoPesquisa().subscribe(termo => {
      this.onPesquisaChange(termo);
    });
  }


  ngOnInit() {
    this.arquivoService.findAll().subscribe((data) => {
      this.listaArquivos = data;
      this.listaFiltrada = data;
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

  stringToDate(stringDate: string | Date): Date {
    return new Date(stringDate);
  }

  atualizarFiltro() {
    if (this.termoPesquisa) {
      this.listaFiltrada = this.listaArquivos.filter(arquivo => 
        arquivo.arquivo_descricao?.toLowerCase().includes(this.termoPesquisa.toLowerCase()));
    } else {
      this.listaFiltrada = this.listaArquivos;
    }
  }

  onPesquisaChange(novoValor: string) {
    this.termoPesquisa = novoValor;
    this.atualizarFiltro();
  }




  pastas: Pasta[] = [
    {
      nome: 'Documentos'
    },
    {
      nome: 'Planta Projeto'
    },
  ]
  ;

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
