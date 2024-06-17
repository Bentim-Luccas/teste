import { Component } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { BarraPesquisaProjetoComponent } from '../../components/home-arquivos-components/barra-pesquisa-projeto/barra-pesquisa-projeto.component';
import { ModalCriarProjetoComponent } from '../../components/home-arquivos-components/modal-criar-projeto/modal-criar-projeto.component';
import { HomeArquivosComponentsComponent } from "../../components/home-arquivos-components/home-arquivos-components.component";
import { ModalEditarProjetoComponent } from "../../components/home-arquivos-components/modal-editar-projeto/modal-editar-projeto.component";
import { AngularSplitModule } from 'angular-split';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './homeArquivos.component.html',
    styleUrl: './homeArquivos.component.css',
    imports: [ComentarioComponent, TabsComponent, NavbarComponent, MenuLateralComponent, BreadcrumbComponent, BarraPesquisaProjetoComponent, ModalCriarProjetoComponent, HomeArquivosComponentsComponent, ModalEditarProjetoComponent, AngularSplitModule]
})
export class HomeComponent {

}
