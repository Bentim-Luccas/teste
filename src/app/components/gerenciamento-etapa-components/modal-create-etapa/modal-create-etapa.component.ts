import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EtapaService } from '../../../service/etapa.service';
import { Etapa } from '../../../interface/etapa';
import { DisciplinaService } from '../../../service/disciplina.service';

@Component({
  selector: 'app-modal-create-etapa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-create-etapa.component.html',
  styleUrl: './modal-create-etapa.component.css'
})
export class ModalCreateEtapaComponent {

  modalOpen = false;

  etapaForm = new FormGroup({
    etapa_descricao: new FormControl('', Validators.required),
    etapa_status: new FormControl('', Validators.required),
    disciplina_id: new FormControl(2, Validators.required),
    etapa_id_pai: new FormControl(1, Validators.required),// Inicialmente pode ser null
  });

  constructor(private etapaService: EtapaService) { }

  onSubmit() {
    console.log(this.etapaForm.value);
    this.etapaService.cadastrarEtapa(<Etapa>this.etapaForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.closeModal();
      },
      error: (error) => console.log(error),
    })
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}
