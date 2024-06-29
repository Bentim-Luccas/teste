import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjetoService } from '../../../service/projeto.service';
import { Projeto } from '../../../interface/projeto';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-modal-editar-etapa',
  standalone: true,
  imports: [NgFor],
  templateUrl: './modal-editar-projeto.component.html',
  styleUrl: './modal-editar-projeto.component.css'
})
export class ModalEditarProjetoComponent {

  projetos: Projeto[]=[];

  constructor(private projetoService: ProjetoService, public dialogRef: MatDialogRef<ModalEditarProjetoComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
