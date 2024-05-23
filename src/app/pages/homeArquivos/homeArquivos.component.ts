import { Component } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ModalEditComponent } from '../../components/etapa/modal-edit/modal-edit.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
<<<<<<< HEAD
import { ListaCompartilhadaComponent } from '../../components/lista-compartilhada/lista-compartilhada.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComentarioComponent,TabsComponent,NavbarComponent,MenuLateralComponent, ListaCompartilhadaComponent],
  templateUrl: './homeArquivos.component.html',
  styleUrl: './homeArquivos.component.css'

=======
import { ModalEditarProjetoComponent } from '../../components/modal-editar-projeto/modal-editar-projeto.component';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './homeArquivos.component.html',
    styleUrl: './homeArquivos.component.css',
    imports: [ComentarioComponent, TabsComponent, NavbarComponent, MenuLateralComponent, ModalEditarProjetoComponent]
>>>>>>> 15c7021ef181a7a10a4fd1b9f47709f1a16547c6
})
export class HomeComponent {

}