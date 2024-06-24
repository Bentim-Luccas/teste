import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TagsComponent } from '../../modal-enviar-arquivo/tags/tags.component';
import { ArquivoTagComponent } from '../../arquivo-tag/arquivo-tag.component';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import Dropdown from 'flowbite/lib/esm/components/dropdown';
import { FiltroService } from '../../../../service/filtro.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-filtro-pesquisa',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, TagsComponent, MatIcon, FormsModule, ArquivoTagComponent, MatMenuModule, ReactiveFormsModule],
  templateUrl: './modal-filtro-pesquisa.component.html',
  styleUrl: './modal-filtro-pesquisa.component.css'
})

export class ModalFiltroPesquisaComponent implements OnInit {
  formulario: FormGroup;
  currentDropdown: string | null = null;
  selectedOrdenacao: string = 'Última modificação';
  statusSelecionado: string[] = [];
  selectedUltimaModificacao: string = 'Selecione a opção';

  constructor(private fb: FormBuilder, private filtroService: FiltroService, public dialogRef: MatDialogRef<ModalFiltroPesquisaComponent>) {
    this.formulario = this.fb.group({
      ordenacao: ['Última modificação'],
      status: [''],
      ultimaModificacao: ['']
    });
  }

  status: string[] = [

    'Em Progresso',
    'Completo',
    'Liberado para Obra',
    'Cancelado',

  ]

  ultimaModificacao: string[] = [

    'Hoje',
    'Últimos 7 dias',
    'Últimos 30 dias',
    'Este ano',

  ]

  itensOrdenar: string[] = [

    'Última modificação',
    'Maior tamanho',
    'Menor tamanho',
    'A-Z',
    'Z-A',

  ]

  setOrdenacao(event: Event, item: string) {
    event.preventDefault();
    this.formulario.get('ordenacao')?.setValue(item);
    this.selectedOrdenacao = item;
    this.currentDropdown = null;
  }

  setUltimaModificacao(event: Event, data: string) {
    event.preventDefault();
    this.formulario.get('ultimaModificacao')?.setValue(data);
    this.selectedUltimaModificacao = data;  // Atualiza o texto do botão
    this.currentDropdown = null;  // Fecha o dropdown
  }

  onStatusChange(event: any) {
    const checkbox = event.target;
    if (checkbox.checked) {
      this.statusSelecionado.push(checkbox.value);
    } else {
      const index = this.statusSelecionado.indexOf(checkbox.value);
      if (index > -1) {
        this.statusSelecionado.splice(index, 1);
      }
    }
  }

  toggleDropdown(dropdownId: string) {
      if (this.currentDropdown === dropdownId) {
          this.currentDropdown = null;
      } else {
          this.currentDropdown = dropdownId;
      }
  }

  ngOnInit(): void {
    new Dropdown(document.getElementById('dropdownDefaultButton'));
    new Dropdown(document.getElementById('dropdownDataButton'));
  }

  onSubmit() {
    const criterioOrdenacao = this.formulario.get('ordenacao')?.value;
    this.filtroService.atualizarCriterioOrdenacao(criterioOrdenacao);

    this.filtroService.atualizarStatusSelecionado(this.statusSelecionado);

    const ultimaModificacao = this.formulario.get('ultimaModificacao')?.value;
    this.filtroService.atualizarUltimaModificacao(ultimaModificacao);

    this.dialogRef.close();
  }
}

