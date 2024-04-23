import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";
import { CardOrcamentoComponent } from "./card-orcamento/card-orcamento.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { IndicadorComponent } from "./indicador/indicador.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { BadgeAtivoComponent } from "./badge-ativo/badge-ativo.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { GraficoComponent } from "./grafico/grafico.component";
import { UserInfoComponent } from "./user-info/user-info.component";

@Component({
    selector: 'app-relatorio',
    standalone: true,
    templateUrl: './relatorio.component.html',
    styleUrl: './relatorio.component.css',
    imports: [
        CardsComponent,
        CardOrcamentoComponent,
        BreadcrumbComponent,
        IndicadorComponent,
        DropdownComponent,
        BadgeAtivoComponent,
        CalendarComponent,
        GraficoComponent,
        UserInfoComponent
    ]
})
export class RelatorioComponent {

}
