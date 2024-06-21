import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EtapaService } from '../../../service/etapa.service';
import { Etapa } from '../../../interface/etapa';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-criar-etapa',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogContent],
  templateUrl: './modal-criar-etapa.component.html',
  styleUrl: './modal-criar-etapa.component.css'
})
export class ModalCriarEtapaComponent {

  exibirModal: boolean = false;

  etapaForm = new FormGroup({
    etapa_descricao: new FormControl('', Validators.required),
    etapa_status: new FormControl(1, Validators.required),
    disciplina_id: new FormControl(4, Validators.required),
  });

  constructor(private etapaService: EtapaService,
    private dialogRef: MatDialogRef<ModalCriarEtapaComponent>
  ) { }

  onSubmit() {
    console.log(this.etapaForm.value);
    this.etapaService.post(<Etapa>this.etapaForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    })
  }

  fecharModal(): void {
    this.dialogRef.close();
}

}
