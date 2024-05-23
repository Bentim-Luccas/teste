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
  arquivoRecente!: Arquivo;
  extensao: string = '';

  constructor(private arquivoService: ArquivoService, private usuarioService: UsuarioService) {

    this.arquivoSubscription = this.arquivoService.arquivoSelecionado$.subscribe(
      arquivo => {
        this.arquivoSelecionado = arquivo;
        console.log('Arquivo selecionado: ', this.arquivoSelecionado);
        if (arquivo) {
          this.buscarAutor(arquivo.usuario_id);
          this.arquivoService.getVersaoRecente(4, this.arquivoSelecionado!.arquivo_descricao).subscribe(data => {
            this.arquivoRecente = data[0]
            console.log('arquivo recente', this.arquivoRecente);
            this.extensao = this.getFileExtension(this.arquivoRecente.arquivo_descricao)!.toUpperCase()
            console.log('extensao:',this.extensao)
          })
        }
      }
    );
    // this.arquivoService.getVersaoRecente(4, this.arquivoSelecionado!.arquivo_descricao)
  }

  ngOnDestroy() {
    this.arquivoSubscription.unsubscribe();
    if (this.autor) {
      this.autor = null
    }
  }



  buscarAutor(usuarioId: number) {
    this.usuarioService.findByid(usuarioId).subscribe(
      data => {
        this.autor = data;
        console.log('autor', this.autor);
        this.usuarioService.setAutor(this.autor)
      }
    );
  }

  getFileExtension(filename: string) {
    const parts = filename.split('.');
    return parts.length > 1 ? parts.pop() : '';
  }


  stringToDate(dateString: string | Date): Date {
    return new Date(dateString);
  }




}

