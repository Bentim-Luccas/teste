import { Component, OnInit } from '@angular/core';
import { ArquivoMenuDropdownComponent } from '../arquivo-menu-dropdown/arquivo-menu-dropdown.component'
import { TabsArquivosComponent } from '../tabs-arquivos/tabs-arquivos.component'
import { ArquivoService } from '../../../service/arquivo.service';
import { Arquivo } from '../../../interface/arquivo';
import { log } from 'console';

@Component({
  selector: 'app-tabela-arquivos',
  standalone: true,
  imports: [ArquivoMenuDropdownComponent, TabsArquivosComponent],
  templateUrl: './tabela-arquivos.component.html',
  styleUrl: './tabela-arquivos.component.css'
})
export class TabelaArquivosComponent implements OnInit {

  listaArquivos: Arquivo[] = []
  usuarioId!: number;

  constructor(private arquivoService: ArquivoService) { }


  // ngOnInit() {
  //   this.arquivoService.findAll().subscribe((data) => {
  //     this.listaArquivos = data
  //   })
  // }

  ngOnInit() {
    this.arquivoService.findAll().subscribe((data) => {
      this.listaArquivos = data.map(arquivo => ({ ...arquivo, mostrarDetalhes: false }));
    });
  }


  exibirDetalhes(arquivo: Arquivo) {
    console.log("setando o arquivo ", arquivo);
    this.arquivoService.setArquivoSelecionado(arquivo);

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

  versoes: Versao[] = [
      {
        arquivo_descricao: 'teste 1',
        arquivo_data: '01/04/2024',
        arquivo_versao: 1.1,
        arquivo_status: 'Aprovado'
      },
      {
        arquivo_descricao: 'teste 2',
        arquivo_data: '05/04/2024',
        arquivo_versao: 1.2,
        arquivo_status: 'Aprovado'
      },
      {
        arquivo_descricao: 'teste 3',
        arquivo_data: '15/04/2024',
        arquivo_versao: 1.3,
        arquivo_status: 'Aprovado'
      },
    ]

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
