import { Component } from '@angular/core';
import { Etapa } from '../../interface/etapa/etapa';
import { EtapaService } from '../../service/etapa.service';

@Component({
  selector: 'app-etapa',
  standalone: true,
  imports: [],
  templateUrl: './etapa.component.html',
  styleUrl: './etapa.component.css'
})
export class EtapaComponent {
  etapas: Etapa[] = [];

  novaEtapa: Etapa = {
    etapa_id: 1,
    etapa_descricao: '',
    etapa_data_inicio: new Date(),
    etapa_data_fim: new Date(),
    etapa_ordem: 1,
    etapa_status: 1,
    disciplina_id: 4,
    etapa_id_pai: undefined,
  };

  constructor(private etapaService: EtapaService) { }

  ngOnInit(): void {
    this.buscarTodasEtapas();
  }

  criarEtapa(): void {
    this.etapaService.post(this.novaEtapa).subscribe(
      novaEtapa => {
        this.etapas.push(novaEtapa);
        this.novaEtapa = { etapa_id: 0, etapa_descricao: '', etapa_data_inicio: new Date(), etapa_data_fim: new Date(), etapa_ordem: 1, etapa_status: 1, disciplina_id: 1, etapa_id_pai: undefined };
      }
    );
  }

  buscarTodasEtapas(): void {
    this.etapaService.findAll().subscribe(etapas => {
      this.etapas = etapas;
    });
  }

  buscarEtapaId(id: number): void {
    this.etapaService.findOne(id).subscribe(etapa => {
      console.log('Etapa encontrada: ', etapa);
    });
  }

  atualizarEtapa(id: number, novosDados: any): void {
    this.etapaService.patch(id, novosDados).subscribe(etapaAtualizada => {
      console.log('Etapa atualizada: ', etapaAtualizada);
    });
  }

  removerEtapa(id: number): void {
    this.etapaService.remove(id).subscribe(
      () => {
        this.etapas = this.etapas.filter(etapa => etapa.etapa_id !== id);
      }
    );
  }

}