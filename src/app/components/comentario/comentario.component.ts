import { Component, inject, OnInit } from '@angular/core';
import { ComentarioService } from '../../service/comentario.service';
import { Comentario } from '../../interface/comentario/comentario';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-comentario',
  standalone: true,
  imports: [],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css',
})
export default class ComentarioComponent implements OnInit {

  constructor(private comentarioService: ComentarioService) { }
  comentarios: Comentario[] = [];

   comentario: Comentario = {
    arquivo_comentario_descricao: 'Teste',
    arquivo_id: '1',
    arquivo_comentario_nivel: 1,
  };

  postarComentario(){
    this.comentarioService.post(this.comentario).subscribe((comentario) => {
      this.comentarios.push(comentario);
    });
  }

  ngOnInit(): void {
    this.comentarioService.findAll().subscribe((comments) => {
      this.comentarios = comments;
    });
  }
}
