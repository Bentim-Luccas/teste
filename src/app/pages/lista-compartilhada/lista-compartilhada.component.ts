import { Component} from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BarraPesquisaComponent } from '../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component';
import { ModalButtonComponent } from '../../components/gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { TabelaListaCompartilhadaComponent } from '../../components/lista-compartilhada/tabela-lista-compartilhada.component';
import { BtnListaCompartilhadaComponent } from '../../components/btn-lista-compartilhada/btn-lista-compartilhada.component'
import { BtnGrupoListaCompartilhadaComponent } from '../../components/btn-grupo-lista-compartilhada/btn-grupo-lista-compartilhada.component'
import { SearchListaCompartilhadaComponent } from '../../components/search-lista-compartilhada/search-lista-compartilhada.component'
import { TrackPageListaCompartilhadaComponent } from '../../components/track-page-lista-compartilhada/track-page-lista-compartilhada.component'
import { BreadcrumbListaCompartilhadaComponent } from '../../components/breadcrumb-lista-compartilhada/breadcrumb-lista-compartilhada.component'
import { ListaCompartilhadaModalButtonComponent } from "../../components/lista-compartilhada/lista-compartilhada-modal/lista-compartilhada-modal.component";


@Component({
  selector: 'app-lista-compartilhada',
  standalone: true,
  imports: [BreadcrumbComponent, NavbarComponent, BarraPesquisaComponent, ModalButtonComponent, MenuLateralComponent, TabelaListaCompartilhadaComponent, BtnListaCompartilhadaComponent, BtnGrupoListaCompartilhadaComponent, SearchListaCompartilhadaComponent, TrackPageListaCompartilhadaComponent, BreadcrumbListaCompartilhadaComponent, ListaCompartilhadaModalButtonComponent],
  templateUrl: './lista-compartilhada.component.html',
  styleUrl: './lista-compartilhada.component.css'
})
export class ListaCompartilhadaComponent {}
