import { Component } from '@angular/core';
import ComentarioComponent from '../comentario/comentario.component';
import { VisualizacaoArquivoComponent } from '../visualizacao-arquivo/visualizacao-arquivo.component'

@Component({
  selector: 'app-tabs-arquivos',
  standalone: true,
  imports: [ VisualizacaoArquivoComponent, ComentarioComponent],
  templateUrl: './tabs-arquivos.component.html',
  styleUrl: './tabs-arquivos.component.css'
})
export class TabsArquivosComponent {

}
