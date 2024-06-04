import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinaService } from '../../../service/disciplina.service';
import { Disciplina } from '../../../interface/disciplina';

@Component({
  selector: 'app-tabela-disciplina',
  standalone: true,
  imports: [NgFor],
  template: `<li *ngFor="let usuarios of usuarioresponse"></li>`,
  templateUrl: './tabela-disciplina.component.html',
  styleUrl: './tabela-disciplina.component.css'
})

export class TabelaDisciplinaComponent implements OnInit  {

  constructor ( private disciplinaservice :DisciplinaService,
    private router: Router
  ){}

 disciplina! : Disciplina[];
  ngOnInit(): void {
    this.getDisciplina();
  }
  getDisciplina():void{
    this.disciplinaservice.getDisciplina().subscribe({
      next:(response) =>{
        response && (this.disciplina = response);
      },
        error: (error) => console.log(error),
    })
  }

  listaCompartilhada(){
    this.router.navigate(['/listaCompartilhada'])
  }
}
