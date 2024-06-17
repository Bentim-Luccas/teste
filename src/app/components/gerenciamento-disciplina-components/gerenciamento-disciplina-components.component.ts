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
    ) { }

    ngOnInit(): void {
        this.CarregarDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(4, 4);
    }

    CarregarDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(idProjeto: number, idUsuario: number) {
        this.disciplinaService.findDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(idProjeto, idUsuario).subscribe({
            next: (disciplina) => {
                this.disciplina = disciplina;
                this.carregarProjetoNome(disciplina);
            },
            error: (error) => console.log(error)
        });
    }

    private carregarProjetoNome(disciplina: Disciplina[]): void {
        disciplina.forEach((disc: Disciplina) => {
            this.projetoService.findOne(disc.projeto_id).subscribe(
                (projeto: Projeto) => {
                    if (projeto) {
                        disc.projeto_nome = projeto.projeto_descricao || '';
                    } else {
                        disc.projeto_nome = '';
                    }
                },
                (error: any) => {
                    console.error(`Erro ao carregar nome do projeto ${disc.projeto_id}:`, error);
                    disc.projeto_nome = '';
                }
            );
        });
    }

    deletarDisciplina(idDisciplina: number): void {
        this.disciplinaService.remove(idDisciplina).subscribe(() => {
            this.disciplina = this.disciplina.filter(
                (d) => d.disciplina_id !== idDisciplina
            );
        });
    }
}
