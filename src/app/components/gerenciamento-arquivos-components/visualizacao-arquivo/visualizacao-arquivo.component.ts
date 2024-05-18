import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ArquivoTagComponent } from '../arquivo-tag/arquivo-tag.component'
import { Subscription } from 'rxjs';
import { Arquivo } from '../../../interface/arquivo';
import { ArquivoService } from '../../../service/arquivo.service';
import { Usuario } from '../../../interface/usuario';
import { UsuarioService } from '../../../service/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizacao-arquivo',
  standalone: true,
  imports: [ArquivoTagComponent, CommonModule],
  templateUrl: './visualizacao-arquivo.component.html',
  styleUrl: './visualizacao-arquivo.component.css'
})
export class VisualizacaoArquivoComponent implements OnDestroy {

  arquivoSelecionado: Arquivo | null = null;
  private arquivoSubscription: Subscription;
  autor: Usuario | null = null;

  constructor(private arquivoService: ArquivoService, private usuarioService: UsuarioService) {
    this.arquivoSubscription = this.arquivoService.arquivoSelecionado$.subscribe(
      arquivo => {
        this.arquivoSelecionado = arquivo;
        if (arquivo) {
          this.buscarAutor(arquivo.usuario_id); // Chame a função para buscar o autor quando um novo arquivo for selecionado
        }
      }
    );
  }

  ngOnDestroy() {
    this.arquivoSubscription.unsubscribe();
    if (this.autor) {
      this.autor = null // Certifique-se de cancelar a inscrição ao destruir o componente
    }
  }

  buscarAutor(usuarioId: number) {
    this.usuarioService.findByid(usuarioId).subscribe(
      data => {
        this.autor = data;
        console.log(this.autor); // Certifique-se de que o autor foi buscado com sucesso
        this.usuarioService.setUsuarioSelecionado(this.autor)
      }
    );
  }

  stringToDate(dateString: string): Date {
    return new Date(dateString);
  }


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

  arquivosExtensores: ArquivoExt[] = [
    {
      foto: 'Excel',
      nome: 'Excel'
    },
    {
      foto: 'PDF',
      nome: 'PDF'
    },
    {
      foto: 'Word',
      nome: 'Word'
    },
    {
      foto: 'xlsx',
      nome: 'xlsx'
    },
  ]

}

export class Revisor {
  nome!: string;
  cargo!: string;
}
export class ArquivoExt {
  foto!: string;
  nome!: string;
}
