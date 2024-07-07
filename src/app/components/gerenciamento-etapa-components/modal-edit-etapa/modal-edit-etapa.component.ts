import { Component } from '@angular/core';
import { EtapaService } from '../../../service/etapa.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-etapa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-edit-etapa.component.html',
  styleUrl: './modal-edit-etapa.component.css'
})
export class ModalEditEtapaComponent {

  modalOpen = false;

  constructor(private etapaService: EtapaService) { }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}
