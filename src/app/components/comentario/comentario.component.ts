import { Component, inject, OnInit } from '@angular/core';
import { ComentarioService } from '../../service/comentario.service';

@Component({
  selector: 'app-comentario',
  standalone: true,
  imports: [],
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
export default class ComentarioComponent implements OnInit{
  private comentarioService = inject(ComentarioService);

  comentarios:any = [] ;

  ngOnInit(): void {
    this.comentarioService.findAll()
    .subscribe((comments) => {this.comentarios = comments;});
  }
}
