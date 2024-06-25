import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../interface/disciplina';
import { DisciplinaService } from '../../service/disciplina.service';
import { ProjetoService } from '../../service/projeto.service';
import { Projeto } from '../../interface/projeto';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-gerenciamento-disciplina-components',
    standalone: true,
    imports: [NgFor, RouterModule],
    templateUrl: './gerenciamento-disciplina-components.component.html',
    styleUrls: ['./gerenciamento-disciplina-components.component.css']
})
export class GerenciamentoDisciplinaComponentsComponent implements OnInit {
    disciplina: Disciplina[] = [];

    constructor(
        private disciplinaService: DisciplinaService,
        private projetoService: ProjetoService
    ) {}

    ngOnInit(): void {
        this.carregarDisciplina();
    }

    carregarDisciplina(): void {
        this.disciplinaService.findAll().subscribe(
            (disciplinas: Disciplina[]) => {
                this.disciplina = disciplinas;
                // Carregar nome da empresa para cada projeto
                this.loadProjetoNome(disciplinas);
            },
            (error: any) => {
                console.error('Erro ao carregar disciplinas:', error);
            }
        );
    }

    private loadProjetoNome(disciplinas: Disciplina[]): void {
        disciplinas.forEach((disc: Disciplina) => {
            this.projetoService.findOne(disc.projeto_id).subscribe(
                (projeto: Projeto) => {
                    if (projeto) {
                        disc.projeto_nome = projeto.projeto_descricao || ''; // Handle undefined or null case
                    } else {
                        disc.projeto_nome = ''; // Handle case where projeto is undefined
                    }
                },
                (error: any) => {
                    console.error(`Erro ao carregar nome do projeto ${disc.projeto_id}:`, error);
                    disc.projeto_nome = ''; // Handle error case
                }
            );
        });
    }
    

    removeDisciplina(id: number): void {
        this.disciplinaService.remove(id).subscribe({
            next: () => {
                this.disciplina = this.disciplina.filter(disciplina => disciplina.disciplina_id !== id);
            },
            error: (error: any) => {
                console.error('Erro ao remover disciplina:', error);
            }
        });
    }
}
