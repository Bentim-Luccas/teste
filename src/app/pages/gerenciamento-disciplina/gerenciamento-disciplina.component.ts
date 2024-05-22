import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";
import { DisciplinaComponent } from "../../components/disciplina/disciplina.component";
import { CreateComponent } from "../../components/disciplina/modal/create/create.component";
import { EditComponent } from "../../components/disciplina/modal/edit/edit.component";
import { DeleteComponent } from "../../components/disciplina/modal/delete/delete.component";

@Component({
    selector: 'app-gerenciamento-disciplina',
    standalone: true,
    templateUrl: './gerenciamento-disciplina.component.html',
    styleUrl: './gerenciamento-disciplina.component.css',
    imports: [NavbarComponent, MenuLateralComponent, DisciplinaComponent, CreateComponent, EditComponent, DeleteComponent]
})
export class GerenciamentoDisciplinaComponent {

}
