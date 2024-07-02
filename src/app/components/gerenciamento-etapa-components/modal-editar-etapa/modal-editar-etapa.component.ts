import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-editar-etapa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-editar-etapa.component.html',
  styleUrl: './modal-editar-etapa.component.css'
})
export class ModalEditarEtapaComponent {

  constructor(private dialogRef: MatDialogRef<ModalEditarEtapaComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
