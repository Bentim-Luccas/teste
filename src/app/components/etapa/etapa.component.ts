import { Component } from '@angular/core';
import { ModalCreateEtapaComponent } from "./modal-create-etapa/modal-create-etapa.component";
import { ModalEditEtapaComponent } from "./modal-edit-etapa/modal-edit-etapa.component";

@Component({
    selector: 'app-etapa',
    standalone: true,
    templateUrl: './etapa.component.html',
    styleUrl: './etapa.component.css',
    imports: [ModalCreateEtapaComponent, ModalEditEtapaComponent]
})
export class EtapaComponent {

}
