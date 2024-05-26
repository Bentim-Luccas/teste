import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ModalFiltroComponent } from '../modal-filtro/modal-filtro.component';

@Component({
  selector: 'app-barra-pesquisa',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {

  constructor(public dialog: MatDialog) {}

  openFilterDialog(): void {
    this.dialog.open(ModalFiltroComponent, {
      width: '680px'
    });
  }
}
