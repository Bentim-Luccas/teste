import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';import { DisciplinaService } from '../../../service/disciplina.service';
import { Disciplina } from '../../../interface/disciplina';

@Component({
  selector: 'app-modal-create-disciplina',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-create-disciplina.component.html',
  styleUrl: './modal-create-disciplina.component.css'
})
export class ModalCreateDisciplinaComponent {

  modalOpen = false;

  disciplinaForm = new FormGroup({
    disciplina_descricao: new FormControl('', Validators.required),
    projeto_id: new FormControl(4, Validators.required),
    disciplina_status: new FormControl(1, Validators.required),
  });

  constructor(private disciplinaService: DisciplinaService) {}

  onSubmit() {
    console.log(this.disciplinaForm.value);
    this.disciplinaService.post(<Disciplina>this.disciplinaForm.value).subscribe({
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
