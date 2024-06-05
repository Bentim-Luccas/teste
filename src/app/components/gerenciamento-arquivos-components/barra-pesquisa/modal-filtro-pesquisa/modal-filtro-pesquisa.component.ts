import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { TagsComponent } from '../../modal-enviar-arquivo/tags/tags.component';
import { ArquivoTagComponent } from '../../arquivo-tag/arquivo-tag.component';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-filtro-pesquisa',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, TagsComponent, MatIcon, FormsModule, ArquivoTagComponent],
  templateUrl: './modal-filtro-pesquisa.component.html',
  styleUrl: './modal-filtro-pesquisa.component.css'
})

export class ModalFiltroPesquisaComponent implements OnInit {
    formulario: FormGroup;

    constructor(private fb: FormBuilder) {
      this.formulario = this.fb.group({
        ordenacao: [''],  // Inicialmente sem seleção
        status: [''],     // Depende de como você está gerenciando status, pode ser um array se múltiplos
        ultimaModificacao: ['']  // Inicialmente sem seleção
      });
    }

    status: string[] = [

      'Em Progresso',
      'Completo',
      'Liberado para Obra',
      'Cancelado',

    ]

    datas: string[] = [

      'Hoje',
      'Últimos 7 dias',
      'Últimos 30 dias',
      'Este ano',

    ]

    itensOrdenar: string[] = [

      'Última modificação',
      'Última vez aberto por mim',
      'A-Z',
      'Número de versões',

    ]

    ngOnInit(): void {

    }

    onSubmit(){}

}

