import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BreadcrumbDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/breadcrumb-disciplina/breadcrumb-disciplina.component';
import { GerenciamentoDisciplinaComponentsComponent } from '../../components/gerenciamento-disciplina-components/gerenciamento-disciplina-components.component';
import { BuscarDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/buscar-disciplina/buscar-disciplina.component';
import { TrackPageDisciplinaComponent } from '../../components/gerenciamento-disciplina-components/track-page-disciplina/track-page-disciplina.component';
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";
import { BarraPesquisaComponent } from "../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component";
import { BtnModalCriarDisciplina } from "../../components/gerenciamento-disciplina-components/modal-criar-disciplina/button/btn-modal-criar-disciplina.component";

@Component({
    selector: 'app-gerenciamento-disciplina',
    standalone: true,
    templateUrl: './gerenciamento-disciplinas.component.html',
    styleUrl: './gerenciamento-disciplinas.component.css',
    imports: [
        NavbarComponent,
        BreadcrumbDisciplinaComponent,
        GerenciamentoDisciplinaComponentsComponent,
        BuscarDisciplinaComponent,
        TrackPageDisciplinaComponent,
        MenuLateralComponent,
        BarraPesquisaComponent,
        BtnModalCriarDisciplina
    ]
})
export class GerenciamentoDisciplinasComponent {}
