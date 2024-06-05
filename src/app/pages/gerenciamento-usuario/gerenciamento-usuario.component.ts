import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { TabsUsuarioComponent } from '../../components/gerenciamento-usuarios-components/tabs-usuario/tabs-usuario.component';

@Component({
    selector: 'app-gerenciamento-usuario',
    standalone: true,
    templateUrl: './gerenciamento-usuario.component.html',
    styleUrl: './gerenciamento-usuario.component.css',
    imports: [NavbarComponent, MenuLateralComponent, BreadcrumbComponent, TabsUsuarioComponent]
})
export class GerenciamentoUsuarioComponent {

}
