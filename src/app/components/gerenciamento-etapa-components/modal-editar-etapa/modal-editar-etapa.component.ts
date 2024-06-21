import { Component } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-editar-etapa',
  standalone: true,
  imports: [MatDialogContent],
  templateUrl: './modal-editar-etapa.component.html',
  styleUrl: './modal-editar-etapa.component.css'
})
export class ModalEditarEtapaComponent {

  constructor(private dialogRef: MatDialogRef<ModalEditarEtapaComponent>) { }

  fecharModal(): void {
    this.dialogRef.close();
}

}
