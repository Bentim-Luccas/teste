import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BreadcrumbDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/breadcrumb-disciplina/breadcrumb-disciplina.component';
import { GerenciamentoDisciplinaComponentsComponent } from '../../components/gerenciamento-disciplina-components/gerenciamento-disciplina-components.component';
import { BarraPesquisaDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/barra-pesquisa-disciplina/barra-pesquisa-disciplina.component';
import { BuscarDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/buscar-disciplina/buscar-disciplina.component';
import { TrackPageDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/track-page-disciplina/track-page-disciplina.component';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { MenuLateralDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/menu-lateral-disciplina/menu-lateral-disciplina.component";
import { BarraPesquisaComponent } from "../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component";
import { ModalCreateDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/modal-create-disciplina/modal-create-disciplina.component";

@Component({
    selector: 'app-gerenciamento-disciplina',
    standalone: true,
    templateUrl: './gerenciamento-disciplinas.component.html',
    styleUrl: './gerenciamento-disciplinas.component.css',
    imports: [
        NavbarComponent,
        BreadcrumbDisciplinaComponent,
        GerenciamentoDisciplinaComponentsComponent,
        BarraPesquisaDisciplinaComponent,
        BuscarDisciplinaComponent,
        TrackPageDisciplinaComponent,
        BreadcrumbComponent,
        BreadcrumbItemDirective,
        MenuLateralDisciplinaComponent,
        BarraPesquisaComponent,
        ModalCreateDisciplinaComponent
    ]
})
export class GerenciamentoDisciplinasComponent {}
