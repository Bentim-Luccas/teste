import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";
import { CardOrcamentoComponent } from "./card-orcamento/card-orcamento.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";

@Component({
    selector: 'app-relatorio',
    standalone: true,
    templateUrl: './relatorio.component.html',
    styleUrl: './relatorio.component.css',
    imports: [CardsComponent, CardOrcamentoComponent, BreadcrumbComponent]
})
export class RelatorioComponent {

}
