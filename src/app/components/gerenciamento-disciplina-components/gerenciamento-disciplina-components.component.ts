import { Component } from '@angular/core';
import { TabelaDisciplinaComponent } from "./tabela-disciplina/tabela-disciplina.component";

@Component({
    selector: 'app-gerenciamento-disciplina-components',
    standalone: true,
    templateUrl: './gerenciamento-disciplina-components.component.html',
    styleUrl: './gerenciamento-disciplina-components.component.css',
    imports: [TabelaDisciplinaComponent]
})
export class GerenciamentoDisciplinaComponentsComponent {

}
