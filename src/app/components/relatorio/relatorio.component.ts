import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";

@Component({
    selector: 'app-relatorio',
    standalone: true,
    templateUrl: './relatorio.component.html',
    styleUrl: './relatorio.component.css',
    imports: [CardsComponent]
})
export class RelatorioComponent {

}
