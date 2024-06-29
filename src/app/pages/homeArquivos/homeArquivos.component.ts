import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { HomeArquivosComponentsComponent } from '../../components/home-arquivos-components/home-arquivos-components.component';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { BarraPesquisaComponent } from "../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component";
import { BtnModalCriarProjeto } from "../../components/home-arquivos-components/modal-criar-projeto/button/btn--modal-criar-projeto.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './homeArquivos.component.html',
    styleUrls: ['./homeArquivos.component.css'],
    imports: [
        NavbarComponent,
        MenuLateralComponent,
        HomeArquivosComponentsComponent,
        BreadcrumbComponent,
        BreadcrumbItemDirective,
        BarraPesquisaComponent,
        BtnModalCriarProjeto
    ]
})
export class HomeComponent {

}
