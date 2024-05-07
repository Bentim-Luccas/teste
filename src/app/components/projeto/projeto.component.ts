import { Component } from '@angular/core';
import { ModalCreateProjetoComponent } from "./modal-create-projeto/modal-create-projeto.component";
import { ModalEditProjetoComponent } from "./modal-edit-projeto/modal-edit-projeto.component";

@Component({
    selector: 'app-projeto',
    standalone: true,
    templateUrl: './projeto.component.html',
    styleUrl: './projeto.component.css',
    imports: [ModalCreateProjetoComponent, ModalEditProjetoComponent]
})
export class ProjetoComponent {

}
