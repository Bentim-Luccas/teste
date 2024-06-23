import { Component} from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BarraPesquisaComponent } from '../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component';
import { ModalButtonComponent } from '../../components/gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { TabelaListaCompartilhadaComponent } from '../../components/lista-compartilhada/tabela-lista-compartilhada.component';
import { ListaCompartilhadaModalButtonComponent } from "../../components/lista-compartilhada/lista-compartilhada-modal/lista-compartilhada-modal.component";


@Component({
    selector: 'app-lista-compartilhada',
    standalone: true,
    templateUrl: './lista-compartilhada.component.html',
    styleUrls: ['./lista-compartilhada.component.css'],
    imports: [
        BreadcrumbComponent,
        NavbarComponent,
        BarraPesquisaComponent,
        ModalButtonComponent,
        MenuLateralComponent,
        TabelaListaCompartilhadaComponent,
        ListaCompartilhadaModalButtonComponent
    ]
})
export class ListaCompartilhadaComponent {}
