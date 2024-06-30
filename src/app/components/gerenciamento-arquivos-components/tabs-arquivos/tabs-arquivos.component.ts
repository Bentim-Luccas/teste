import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import ComentarioComponent from '../../comentario/comentario.component';
import { VisualizacaoArquivoComponent } from '../visualizacao-arquivo/visualizacao-arquivo.component'
import { VersoesArquivoComponent } from '../tabela-arquivos/versoes-arquivo/versoes-arquivo.component';
import { TabConvidadosComponent } from '../../lista-compartilhada/tab-convidados/tab-convidados.component';
import { TabGeralComponent } from '../../lista-compartilhada/tab-geral/tab-geral.component';
import { TabVisualizacaoComponent } from '../../lista-compartilhada/tab-visualizacao/tab-visualizacao.component';


@Component({
  selector: 'app-tabs-arquivos',
  standalone: true,
  imports: [ VisualizacaoArquivoComponent, ComentarioComponent, VersoesArquivoComponent, TabConvidadosComponent, TabGeralComponent, TabVisualizacaoComponent],
  templateUrl: './tabs-arquivos.component.html',
  styleUrl: './tabs-arquivos.component.css'
})
export class TabsArquivosComponent implements OnInit {

  constructor(private router: ActivatedRoute){}

  teste: boolean= true;

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params: ParamMap) => {
      if (params.has('listaId')) {
        this.teste = false;
      }
  });

  }
}
