import { Component } from '@angular/core';
import { DropdownComponent } from './../../components/relatorio/dropdown/dropdown.component';
import { CardsComponent } from '../../components/relatorio/cards/cards.component';
import { BreadcrumbComponent } from '../../components/relatorio/breadcrumb/breadcrumb.component';
import { IndicadorComponent } from '../../components/relatorio/indicador/indicador.component';
import { BadgeAtivoComponent } from '../../components/relatorio/badge-ativo/badge-ativo.component';
import { CalendarComponent } from '../../components/relatorio/calendar/calendar.component';
import { GraficoComponent } from '../../components/relatorio/grafico/grafico.component';
import { UserInfoComponent } from '../../components/relatorio/user-info/user-info.component';
import { ArquivosRecentesComponent } from '../../components/relatorio/arquivos-recentes/arquivos-recentes.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";

@Component({
    selector: 'app-relatorio',
    standalone: true,
    templateUrl: './relatorio-dashboard.component.html',
    styleUrl: './relatorio-dashboard.component.css',
    imports: [
        CardsComponent,
        BreadcrumbComponent,
        IndicadorComponent,
        DropdownComponent,
        BadgeAtivoComponent,
        CalendarComponent,
        GraficoComponent,
        UserInfoComponent,
        ArquivosRecentesComponent,
        NavbarComponent,
        MenuLateralComponent
    ]
})
export class RelatorioComponent {

}
