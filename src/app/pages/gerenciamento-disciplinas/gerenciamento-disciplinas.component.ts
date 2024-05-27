import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MenuLateralDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/menu-lateral-disciplina/menu-lateral-disciplina.component";
import { BreadcrumbDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/breadcrumb-disciplina/breadcrumb-disciplina.component";
import { BarraPesquisaComponent } from "../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component";
import { ModalCriarDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/modal-criar-disciplina/modal-criar-disciplina.component";
import { GerenciamentoDisciplinaComponentsComponent } from "../../components/gerenciamento-disciplina-components/gerenciamento-disciplina-components.component";
import { ModalEditarDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/modal-editar-disciplina/modal-editar-disciplina.component";
import { ModalExcluirDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/modal-excluir-disciplina/modal-excluir-disciplina.component";

@Component({
    selector: 'app-gerenciamento-disciplina',
    standalone: true,
    templateUrl: './gerenciamento-disciplinas.component.html',
    styleUrl: './gerenciamento-disciplinas.component.css',
    imports: [NavbarComponent, MenuLateralDisciplinaComponent, BreadcrumbDisciplinaComponent, BarraPesquisaComponent, ModalCriarDisciplinaComponent, GerenciamentoDisciplinaComponentsComponent, ModalEditarDisciplinaComponent, ModalExcluirDisciplinaComponent]
})
export class GerenciamentoDisciplinasComponent {

}
