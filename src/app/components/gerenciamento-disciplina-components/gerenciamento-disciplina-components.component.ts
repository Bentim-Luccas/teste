import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../interface/disciplina';
import { DisciplinaService } from '../../service/disciplina.service';
import { ProjetoService } from '../../service/projeto.service';
import { Projeto } from '../../interface/projeto';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalEditDisciplinaComponent } from "./modal-edit-disciplina/modal-edit-disciplina.component";


@Component({
    selector: 'app-gerenciamento-disciplina-components',
    standalone: true,
    templateUrl: './gerenciamento-disciplina-components.component.html',
    styleUrls: ['./gerenciamento-disciplina-components.component.css'],
    imports: [CommonModule, ModalEditDisciplinaComponent]
})
export class GerenciamentoDisciplinaComponentsComponent implements OnInit {
    disciplinas: Disciplina[] = [];

    constructor(
        private disciplinaService: DisciplinaService,
        private projetoService: ProjetoService,
        private activateRouter: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.CarregarDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(Number(this.activateRouter.snapshot.paramMap.get('id')), Number(sessionStorage.getItem('id')))
    }

    CarregarDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(idProjeto: number, idUsuario: number) {
        this.disciplinaService.findDisciplinasDeProjetoIdDaEmpresaDoUsuarioId(idUsuario, idProjeto).subscribe({
            next: (disciplina) => {
                this.disciplinas = disciplina;
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
            this.disciplinas = this.disciplinas.filter(
                (d) => d.disciplina_id !== idDisciplina
            );
        });
    }

    onSelect(project: Disciplina): void {
        const id = project.projeto_id
        this.router.navigate(['/etapas', id]);
    }
    
}
