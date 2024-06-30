import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-editar-disciplina',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-editar-disciplina.component.html',
  styleUrl: './modal-editar-disciplina.component.css'
})
export class ModalEditarDisciplinaComponent {

  constructor(public dialogRef: MatDialogRef<ModalEditarDisciplinaComponent>
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
