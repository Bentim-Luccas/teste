import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { Etapa } from '../../interface/etapa';
import { EtapaService } from '../../service/etapa.service';
import { ModalEditEtapaComponent } from "./modal-edit-etapa/modal-edit-etapa.component";
import { CommonModule } from '@angular/common';
import { ModalEditDisciplinaComponent } from "../gerenciamento-disciplina-components/modal-edit-disciplina/modal-edit-disciplina.component";
import { ProjetoService } from '../../service/projeto.service';

@Component({
  selector: 'app-gerenciamento-etapa-components',
  standalone: true,
  templateUrl: './gerenciamento-etapa-components.component.html',
  styleUrl: './gerenciamento-etapa-components.component.css',
  imports: [CommonModule, RouterModule, ModalEditEtapaComponent, ModalEditDisciplinaComponent]
})
export class GerenciamentoEtapaComponentsComponent implements OnInit {
  etapas: Etapa[] = [];

  constructor(private etapaService: EtapaService,
    private projetoService: ProjetoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CarregarEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(Number(sessionStorage.getItem('id')), 4);
  }

  CarregarEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(idUsuario: number, idDisciplina: number) {
    this.etapaService.findEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(idUsuario, idDisciplina).subscribe({
      next: (etapa) => {
        this.etapas = etapa;
      },
      error: (error) => console.log(error)
    });
  }

  onSelect(etapa: Etapa): void {
    const id = etapa.etapa_id
    this.router.navigate(['/arquivos', id]);
  }

  deletarEtapa(idEtapa: number): void {
    this.etapaService.remove(idEtapa).subscribe(() => {
      this.etapas = this.etapas.filter(
        (e) => e.etapa_id !== idEtapa
      );
    });
  }

}
