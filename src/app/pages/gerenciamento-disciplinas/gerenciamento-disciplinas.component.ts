import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MenuLateralDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/menu-lateral-disciplina/menu-lateral-disciplina.component";
import { BreadcrumbDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/breadcrumb-disciplina/breadcrumb-disciplina.component";
import { ModalCriarDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/modal-criar-disciplina/modal-criar-disciplina.component";
import { GerenciamentoDisciplinaComponentsComponent } from "../../components/gerenciamento-disciplina-components/gerenciamento-disciplina-components.component";
import { ModalEditarDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/modal-editar-disciplina/modal-editar-disciplina.component";
import { BarraPesquisaDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/barra-pesquisa-disciplina/barra-pesquisa-disciplina.component";

@Component({
    selector: 'app-gerenciamento-disciplina',
    standalone: true,
    templateUrl: './gerenciamento-disciplinas.component.html',
    styleUrl: './gerenciamento-disciplinas.component.css',
    imports: [NavbarComponent, MenuLateralDisciplinaComponent, BreadcrumbDisciplinaComponent, ModalCriarDisciplinaComponent, GerenciamentoDisciplinaComponentsComponent, ModalEditarDisciplinaComponent, BarraPesquisaDisciplinaComponent]
})
export class GerenciamentoDisciplinasComponent {

}
