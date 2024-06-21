import { Component } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-editar-etapa',
  standalone: true,
  imports: [MatDialogContent],
  templateUrl: './modal-editar-projeto.component.html',
  styleUrl: './modal-editar-projeto.component.css'
})
export class ModalEditarProjetoComponent {

  constructor(private dialogRef: MatDialogRef<ModalEditarProjetoComponent>) { }

  fecharModal(): void {
    this.dialogRef.close();
}

}
