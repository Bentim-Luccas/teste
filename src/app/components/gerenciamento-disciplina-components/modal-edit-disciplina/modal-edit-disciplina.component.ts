import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Disciplina } from '../../../interface/disciplina';

@Component({
  selector: 'app-modal-edit-disciplina',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-edit-disciplina.component.html',
  styleUrl: './modal-edit-disciplina.component.css'
})
export class ModalEditDisciplinaComponent {

  disciplinaSelecionada: Disciplina | null = null;

  constructor() {}

  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}
