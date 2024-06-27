import { Component } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { BarraPesquisaProjetoComponent } from '../../components/home-arquivos-components/barra-pesquisa-projeto/barra-pesquisa-projeto.component';
import { HomeArquivosComponentsComponent } from "../../components/home-arquivos-components/home-arquivos-components.component";
import { ButtonModalCriarProjeto } from "../../components/home-arquivos-components/modal-criar-projeto/button/button-modal-criar-projeto.component";
import { ModalCriarProjetoComponent } from '../../components/home-arquivos-components/modal-criar-projeto/modal-criar-projeto.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './homeArquivos.component.html',
    styleUrl: './homeArquivos.component.css',
    imports: [ComentarioComponent, TabsComponent, NavbarComponent, MenuLateralComponent, BarraPesquisaProjetoComponent, HomeArquivosComponentsComponent, ButtonModalCriarProjeto, ModalCriarProjetoComponent, RouterModule, BreadcrumbComponent, BreadcrumbItemDirective]
})
export class HomeComponent {

}
