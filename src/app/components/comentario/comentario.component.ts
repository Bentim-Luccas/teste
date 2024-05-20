import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ComentarioService } from '../../service/comentario.service';
import { Comentario } from '../../interface/comentario/comentario';

@Component({
  selector: 'app-comentario',
  standalone: true,
  imports: [],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css',
})
export default class ComentarioComponent implements OnInit {

  comentarios: Comentario[] = [];
  @ViewChild('novoComentario') novoComentarioInput!: ElementRef;

  constructor(private comentarioService: ComentarioService) {}

  ngOnInit(): void {
    this.carregarComentarios();
  }

  carregarComentarios(): void {
    this.comentarioService.findAll().subscribe(comentarios => {
      this.comentarios = comentarios;
    });
  }

  adicionarComentario(): void {
    const novoComentario = this.novoComentarioInput.nativeElement.value.trim();
    if (novoComentario) {
      const comentario: Comentario = {
        arquivo_comentario_id: 0,
        arquivo_comentario_descricao: novoComentario,
        arquivo_comentario_markup: null,
        arquivo_id: "01",
        arquivo_comentario_id_pai: null,
        arquivo_comentario_nivel: 1,
        arquivo_comentario_data: null,
        arquivo_comentario_status: 1
      };
      this.comentarioService.post(comentario).subscribe(novoComentario => {
        this.comentarios.push(novoComentario);
        this.novoComentarioInput.nativeElement.value = '';
      });
    }
  }

  deletarComentario(comentarioId: number): void {
    this.comentarioService.remove(comentarioId).subscribe(() => {
      this.comentarios = this.comentarios.filter(c => c.arquivo_comentario_id !== comentarioId);
    });
  }

}
