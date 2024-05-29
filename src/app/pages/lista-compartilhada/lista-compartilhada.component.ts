import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { BarraPesquisaComponent } from '../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component';
import { ModalButtonComponent } from '../../components/gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { TabelaListaCompartilhadaComponent } from '../../components/lista-compartilhada/tabela-lista-compartilhada.component';

@Component({
  selector: 'app-lista-compartilhada',
  standalone: true,
  imports: [BreadcrumbComponent, NavbarComponent, BarraPesquisaComponent, ModalButtonComponent, MenuLateralComponent, TabelaListaCompartilhadaComponent],
  templateUrl: './lista-compartilhada.component.html',
  styleUrl: './lista-compartilhada.component.css'
})
export class ListaCompartilhadaComponent {

}
