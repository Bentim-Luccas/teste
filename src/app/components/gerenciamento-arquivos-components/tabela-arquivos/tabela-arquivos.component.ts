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


  ngOnInit() {
    this.arquivoService.findAll().subscribe((data) => {
      this.listaArquivos = data
    })
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


}
export class Pasta {
  nome!: string;
}


