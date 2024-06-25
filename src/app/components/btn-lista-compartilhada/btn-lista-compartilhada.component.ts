import { Component, TemplateRef, ViewChild} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-lista-compartilhada',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatDialogModule],
  templateUrl: './btn-lista-compartilhada.component.html',
  styleUrl: './btn-lista-compartilhada.component.css'
})
export class BtnListaCompartilhadaComponent {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  constructor(
    private dialog: MatDialog,
  ){}

  openModal(){
    this.dialog.open(this.modalTemplate);
  }
}
