import { Component } from '@angular/core';
import { ModalCreateDisciplinaComponent } from "./modal-create-disciplina/modal-create-disciplina.component";
import { ModalEditDisciplinaComponent } from "./modal-edit-disciplina/modal-edit-disciplina.component";

@Component({
    selector: 'app-disciplina',
    standalone: true,
    templateUrl: './disciplina.component.html',
    styleUrl: './disciplina.component.css',
    imports: [ModalCreateDisciplinaComponent, ModalEditDisciplinaComponent]
})
export class DisciplinaComponent {

}
