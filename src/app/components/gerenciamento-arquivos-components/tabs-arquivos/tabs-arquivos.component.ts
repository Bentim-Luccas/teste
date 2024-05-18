import { Component } from '@angular/core';
import ComentarioComponent from '../../comentario/comentario.component';
import { VisualizacaoArquivoComponent } from '../visualizacao-arquivo/visualizacao-arquivo.component'
import { VersoesArquivoComponent } from '../tabela-arquivos/versoes-arquivo/versoes-arquivo.component';

@Component({
  selector: 'app-tabs-arquivos',
  standalone: true,
  imports: [ VisualizacaoArquivoComponent, ComentarioComponent, VersoesArquivoComponent],
  templateUrl: './tabs-arquivos.component.html',
  styleUrl: './tabs-arquivos.component.css'
})
export class TabsArquivosComponent {

}
