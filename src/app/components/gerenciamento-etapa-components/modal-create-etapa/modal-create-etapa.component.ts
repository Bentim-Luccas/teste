import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EtapaService } from '../../../service/etapa.service';
import { Etapa } from '../../../interface/etapa';

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
    etapa_status: new FormControl(1, Validators.required),
    disciplina_id: new FormControl(4, Validators.required),
    etapa_id_pai: new FormControl('etapa_status', Validators.required),
  });

  constructor(private etapaService: EtapaService) { }

  onSubmit() {
    console.log(this.etapaForm.value);
    this.etapaService.post(<Etapa><unknown>this.etapaForm.value).subscribe({
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
