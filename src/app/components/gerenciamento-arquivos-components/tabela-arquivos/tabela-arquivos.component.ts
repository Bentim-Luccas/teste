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
  listaArquivos: Arquivo[] = [];
  listaFiltrada: Arquivo[] = [];
  termoPesquisa: string = '';
  criterioOrdenacao: string = '';
  usuarioId!: number;
  statusSelecionado: string[] = [];


  constructor(private arquivoService: ArquivoService, private filtroService: FiltroService) {
    this.filtroService.obterTermoPesquisa().subscribe(termo => {
      this.onPesquisaChange(termo);
    });

    this.filtroService.obterCriterioOrdenacao().subscribe(criterio => {
      this.onOrdenacaoChange(criterio);
    });

    this.filtroService.atualizarStatusSelecionado(this.statusSelecionado);
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
    // this.arquivoService.getVersaoRecente(4, arquivo.arquivo_descricao).subscribe(data => {
    //  console.log("setando o recente:", data)
    //  this.arquivoService.setArquivoRecente(data)
    // })

    this.arquivoService.setArquivoSelecionado(arquivo);

  }

  stringToDate(stringDate: string | Date): Date {
    return new Date(stringDate);
  }

  atualizarFiltro() {
    let arquivosFiltrados = this.listaArquivos;
    if (this.termoPesquisa) {
      arquivosFiltrados = arquivosFiltrados.filter(arquivo =>
        arquivo.arquivo_descricao?.toLowerCase().includes(this.termoPesquisa.toLowerCase()));
    }
    //if (this.statusSelecionado.length > 0) {
      //arquivosFiltrados = arquivosFiltrados.filter(arquivo =>
        //this.statusSelecionado.includes(arquivo.arquivo_status!));
    //}
    this.listaFiltrada = this.ordenarArquivos(arquivosFiltrados, this.criterioOrdenacao);
  }

  onPesquisaChange(novoValor: string) {
    this.termoPesquisa = novoValor;
    this.atualizarFiltro();
  }

  onOrdenacaoChange(criterio: string) {
    this.listaFiltrada = this.ordenarArquivos(this.listaFiltrada, criterio);
  }

  onStatusChange(status: string[]) {
    this.statusSelecionado = status;
    this.atualizarFiltro();
  }

  ordenarArquivos(lista: Arquivo[], criterio?: string): Arquivo[] {
    if (!criterio) return lista;

    switch (criterio) {
      case 'Última modificação':
        return lista.sort((a, b) => new Date(b.arquivo_data!).getTime() - new Date(a.arquivo_data!).getTime());
      case 'Maior tamanho':
        //return lista.sort((a, b) => b.arquivo_tamanho! - a.arquivo_tamanho!);
      case 'Menor tamanho':
        //return lista.sort((a, b) => a.arquivo_tamanho! - b.arquivo_tamanho!);
      case 'A-Z':
        return lista.sort((a, b) => a.arquivo_descricao!.localeCompare(b.arquivo_descricao!));
      case 'Z-A':
        return lista.sort((a, b) => b.arquivo_descricao!.localeCompare(a.arquivo_descricao!));
      default:
        return lista;
    }
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
