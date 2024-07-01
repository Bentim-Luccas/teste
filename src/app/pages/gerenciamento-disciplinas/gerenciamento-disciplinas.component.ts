import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BreadcrumbDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/breadcrumb-disciplina/breadcrumb-disciplina.component';
import { GerenciamentoDisciplinaComponentsComponent } from '../../components/gerenciamento-disciplina-components/gerenciamento-disciplina-components.component';
import { BarraPesquisaDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/barra-pesquisa-disciplina/barra-pesquisa-disciplina.component';
import { BuscarDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/buscar-disciplina/buscar-disciplina.component';
import { TrackPageDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/track-page-disciplina/track-page-disciplina.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";
import { BtnModalCriarDisciplina } from "../../components/gerenciamento-disciplina-components/modal-criar-disciplina/button/btn-modal-criar-disciplina.component";
import { MenuLateralDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/menu-lateral-disciplina/menu-lateral-disciplina.component";

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
        RouterModule,
        BreadcrumbComponent,
        BreadcrumbItemDirective,
        MenuLateralComponent,
        BtnModalCriarDisciplina,
        MenuLateralDisciplinaComponent
    ]
})
export class GerenciamentoDisciplinasComponent {}
