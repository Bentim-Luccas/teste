import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BreadcrumbEtapaComponent } from "../../components/gerenciamento-etapa-components/breadcrumb-etapa/breadcrumb-etapa.component";
import { GerenciamentoEtapaComponentsComponent } from "../../components/gerenciamento-etapa-components/gerenciamento-etapa-components.component";
import { BuscarEtapaComponent } from '../../components/gerenciamento-etapa-components/buscar-etapa/buscar-etapa.component'
import { TrackPageEtapaComponent } from '../../components/gerenciamento-etapa-components/track-page-etapa/track-page-etapa.component'
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";
import { BarraPesquisaComponent } from "../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component";
import { BtnModalCriarEtapa } from "../../components/gerenciamento-etapa-components/modal-criar-etapa/button/btn-modal-criar-etapa.component";

@Component({
    selector: 'app-gerenciamento-etapas',
    standalone: true,
    templateUrl: './gerenciamento-etapas.component.html',
    styleUrl: './gerenciamento-etapas.component.css',
    imports: [NavbarComponent, BreadcrumbEtapaComponent, GerenciamentoEtapaComponentsComponent, BuscarEtapaComponent, TrackPageEtapaComponent, MenuLateralComponent, BarraPesquisaComponent, BtnModalCriarEtapa]
})
export class GerenciamentoEtapasComponent {

}
