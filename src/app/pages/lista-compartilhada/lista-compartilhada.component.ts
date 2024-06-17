import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BarraPesquisaComponent } from '../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component';
import { ModalButtonComponent } from '../../components/gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { TabelaListaCompartilhadaComponent } from '../../components/lista-compartilhada/tabela-lista-compartilhada.component';

@Component({
  selector: 'app-lista-compartilhada',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NavbarComponent,
    BarraPesquisaComponent,
    ModalButtonComponent,
    MenuLateralComponent,
    TabelaListaCompartilhadaComponent
  ],
  templateUrl: './lista-compartilhada.component.html',
  styleUrls: ['./lista-compartilhada.component.css']
})
export class ListaCompartilhadaComponent {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(this.modalTemplate, {
      width: '45%',
      height: '45%'
    });
  }
}
