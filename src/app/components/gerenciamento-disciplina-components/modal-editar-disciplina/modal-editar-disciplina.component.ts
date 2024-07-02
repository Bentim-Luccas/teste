import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-editar-disciplina',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-editar-disciplina.component.html',
  styleUrl: './modal-editar-disciplina.component.css'
})
export class ModalEditarDisciplinaComponent {

  constructor(private dialogRef: MatDialogRef<ModalEditarDisciplinaComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
