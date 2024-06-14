import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Etapa } from '../../interface/etapa';
import { EtapaService } from '../../service/etapa.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gerenciamento-etapa-components',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './gerenciamento-etapa-components.component.html',
  styleUrl: './gerenciamento-etapa-components.component.css'
})
export class GerenciamentoEtapaComponentsComponent implements OnInit{
  etapa: Etapa[] = [];

  constructor (private etapaService: EtapaService) {}

  ngOnInit(): void {
    this.carregarEtapa();
}

carregarEtapa(): void {
  this.etapaService.findAll().subscribe(
      (etapas: Etapa[]) => {
          this.etapa = etapas;
      },
      (error: any) => {
          console.error('Erro ao carregar disciplinas:', error);
      }
  );
}
}
