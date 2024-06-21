import { Component } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-editar-disciplina',
  standalone: true,
  imports: [MatDialogContent],
  templateUrl: './modal-editar-disciplina.component.html',
  styleUrl: './modal-editar-disciplina.component.css'
})
export class ModalEditarDisciplinaComponent {

  constructor(private dialogRef: MatDialogRef<ModalEditarDisciplinaComponent>) { }

  fecharModal(): void {
    this.dialogRef.close();
}

}
