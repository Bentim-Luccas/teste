import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ArquivoMenuDropdownComponent } from '../arquivo-menu-dropdown/arquivo-menu-dropdown.component'
import { TabsArquivosComponent } from '../tabs-arquivos/tabs-arquivos.component'
import { ArquivoService } from '../../../service/arquivo.service';
import { Arquivo } from '../../../interface/arquivo';
import { log } from 'console';
import { CommonModule } from '@angular/common';
import { VersoesArquivoComponent } from './versoes-arquivo/versoes-arquivo.component';
import { ListaCompartilhadaService } from '../../../service/listaCompartilhada.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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

  @Output() testeChange = new EventEmitter<Arquivo[]>();

  listaArquivosMarcados :  Arquivo[] = [];


  constructor(private arquivoService: ArquivoService, private listaCompartilhadaService: ListaCompartilhadaService, private router: ActivatedRoute) { }


  ngOnInit() {
    this.router.queryParamMap.subscribe((params: ParamMap) => {
      if (params.has('listaId')) {
        const id = params.get('listaId');
        this.listaCompartilhadaService.getArquivosListaCompartilhada(id).subscribe((data) => {
          const seenIds = new Set();
          const uniqueItems = data.filter((item: any) => {
            if (seenIds.has(item.arquivo_id)) {
              return false;
            } else {
              seenIds.add(item.arquivo_id);
              return true;
            }
          });
          this.listaArquivos = uniqueItems;
        })
      } else {
        this.arquivoService.getArquivosPais().subscribe((data) => {
          this.listaArquivos = data
        })
      }
    });



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

  arquivoMarcado(event: Event, arquivo: any) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.checkboxChecked(arquivo);
    } else {
      this.checkboxUnchecked(arquivo);
    }
    this.testeChange.emit(this.listaArquivosMarcados);
  }

  checkboxChecked(arquivo: any) {
    this.listaArquivosMarcados.push(arquivo);
  }

  checkboxUnchecked(arquivo: any) {
    const indice = this.listaArquivosMarcados.findIndex(a => a.arquivo_id === arquivo.arquivo_id);
    if (indice !== -1) {
      this.listaArquivosMarcados.splice(indice, 1);}
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
