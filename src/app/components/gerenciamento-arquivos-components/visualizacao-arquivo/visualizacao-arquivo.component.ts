import { Component } from '@angular/core';
import { ArquivoTagComponent } from '../arquivo-tag/arquivo-tag.component'

@Component({
  selector: 'app-visualizacao-arquivo',
  standalone: true,
  imports: [ArquivoTagComponent],
  templateUrl: './visualizacao-arquivo.component.html',
  styleUrl: './visualizacao-arquivo.component.css'
})
export class VisualizacaoArquivoComponent {

  visualizacoes: Visualização[] = [
    {
      nomeArquivo: 'document1',
      dataCriacao: '20/04/2024',
      dataModificacao: '28/04/2024',
    }

  ]

  autores: Autor[] =[
    {
      nome: 'Neil Sims',
      cargo: 'Arquiteto G+P'
    }
  ]


  revisores: Revisor[] = [
    {
      nome: 'Bonnie Green',
      cargo: 'Projetista G+P'
    },
    {
      nome: 'Chris Bumstead',
      cargo: 'Fisiculturista G+P'
    },
  ]
}

export class Visualização {
  nomeArquivo!: string;
  dataCriacao!: string;
  dataModificacao!: string;
}
export class Autor {
  nome!: string;
  cargo!: string;
}
export class Revisor {
  nome!: string;
  cargo!: string;
}
