import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { BarraPesquisaComponent } from "../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component";
import { TabelaUsuariosComponent } from "../../components/gerenciamento-usuarios-components/tabela-usuarios/tabela-usuarios.component";

@Component({
    selector: 'app-gerenciamento-usuario',
    standalone: true,
    templateUrl: './gerenciamento-usuario.component.html',
    styleUrl: './gerenciamento-usuario.component.css',
    imports: [NavbarComponent, MenuLateralComponent, BreadcrumbComponent, BarraPesquisaComponent, TabelaUsuariosComponent]
})
export class GerenciamentoUsuarioComponent {

}
