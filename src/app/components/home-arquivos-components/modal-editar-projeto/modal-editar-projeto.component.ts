import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-editar-etapa',
  standalone: true,
  imports: [],
  templateUrl: './modal-editar-projeto.component.html',
  styleUrl: './modal-editar-projeto.component.css'
})
export class ModalEditarProjetoComponent {

  constructor(private dialogRef: MatDialogRef<ModalEditarProjetoComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
