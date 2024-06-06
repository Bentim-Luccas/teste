import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../../service/disciplina.service';
import { Disciplina } from '../../../interface/disciplina';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela-disciplina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-disciplina.component.html',
  styleUrl: './tabela-disciplina.component.css'
})

export class TabelaDisciplinaComponent implements OnInit  {

  constructor ( private disciplinaservice :DisciplinaService) {}

 disciplinas : Disciplina[] = [];

  ngOnInit(): void {
    this.getDisciplina();
  }

  getDisciplina():void{
    this.disciplinaservice.getDisciplina().subscribe({
      next:(response) =>{
        response && (this.disciplinas = response);
      },
        error: (error) => console.log(error),
    })
  }

  removeDisciplina(id: number): void {
    this.disciplinaservice.remove(id).subscribe({
      next: () => {
        this.disciplinas = this.disciplinas.filter(disciplina => disciplina.disciplina_id !== id);
      },
      error: (error: any) => console.log(error),
    });
  }

}
