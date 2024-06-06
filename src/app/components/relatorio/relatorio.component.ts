import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { IndicadorComponent } from "./indicador/indicador.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { BadgeAtivoComponent } from "./badge-ativo/badge-ativo.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { GraficoComponent } from "./grafico/grafico.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { ArquivosRecentesComponent } from "./arquivos-recentes/arquivos-recentes.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { MenuLateralComponent } from "../menu-lateral/menu-lateral.component";

@Component({
    selector: 'app-relatorio',
    standalone: true,
    templateUrl: './relatorio.component.html',
    styleUrl: './relatorio.component.css',
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
