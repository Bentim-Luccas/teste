import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Etapa } from '../../interface/etapa';
import { EtapaService } from '../../service/etapa.service';
import { NgFor } from '@angular/common';
import { BtnModalEditarEtapa } from "./modal-editar-etapa/button/btn-modal-editar-etapa.component";

@Component({
    selector: 'app-gerenciamento-etapa-components',
    standalone: true,
    templateUrl: './gerenciamento-etapa-components.component.html',
    styleUrl: './gerenciamento-etapa-components.component.css',
    imports: [NgFor, RouterModule, BtnModalEditarEtapa]
})
export class GerenciamentoEtapaComponentsComponent implements OnInit {
  etapa: Etapa[] = [];

  constructor(private etapaService: EtapaService) { }

  ngOnInit(): void {
    this.CarregarEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(Number(sessionStorage.getItem('id')), 4);
  }

  CarregarEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(idUsuario: number, idDisciplina: number) {
    this.etapaService.findEtapasDaDisciplinaIdDeProjetoDaEmpresaDoUsuarioId(idUsuario, idDisciplina).subscribe({
      next: (etapa) => {
        this.etapa = etapa;
      },
      error: (error) => console.log(error)
    });
  }

  deletarEtapa(idEtapa: number): void {
    this.etapaService.remove(idEtapa).subscribe(() => {
      this.etapa = this.etapa.filter(
        (e) => e.etapa_id !== idEtapa
      );
    });
  }

}
