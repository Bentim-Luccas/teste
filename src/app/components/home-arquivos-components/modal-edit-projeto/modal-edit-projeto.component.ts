import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-edit-projeto',
  standalone: true,
  imports: [],
  templateUrl: './modal-edit-projeto.component.html',
  styleUrl: './modal-edit-projeto.component.css'
})
export class ModalEditProjetoComponent {

  constructor() {}

  modalOpen = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}
