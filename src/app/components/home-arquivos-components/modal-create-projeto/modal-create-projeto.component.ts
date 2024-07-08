import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjetoService } from '../../../service/projeto.service';
import { Projeto } from '../../../interface/projeto';

@Component({
  selector: 'app-modal-create-projeto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-create-projeto.component.html',
  styleUrl: './modal-create-projeto.component.css'
})
export class ModalCreateProjetoComponent {

  modalOpen = false;

  projetoForm = new FormGroup({
    projeto_descricao: new FormControl('', Validators.required),
    //  projeto_data_inicio: new FormControl('', Validators.required),
    //  projeto_data_fim: new FormControl('', Validators.required),
    projeto_orcamento: new FormControl('', Validators.required),
    empresa_id: new FormControl(4, Validators.required),
    projeto_status: new FormControl(1, Validators.required)

  });

  constructor(private projetoService: ProjetoService) { }


  onSubmit() {
    console.log(this.projetoForm.value);
    this.projetoService.cadastrarProjeto(<Projeto>this.projetoForm.value).subscribe({
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
