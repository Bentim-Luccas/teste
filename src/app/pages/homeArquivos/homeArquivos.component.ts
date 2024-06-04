import { Component } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { ListaCompartilhadaComponent } from '../../components/lista-compartilhada/lista-compartilhada.component';
import { TabelaDisciplinaComponent } from "../../components/gerenciamento-disciplina-components/tabela-disciplina/tabela-disciplina.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './homeArquivos.component.html',
    styleUrl: './homeArquivos.component.css',
    imports: [ComentarioComponent, TabsComponent, NavbarComponent, MenuLateralComponent, ListaCompartilhadaComponent, TabelaDisciplinaComponent]
})
export class HomeComponent {

}
