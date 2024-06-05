import { Component } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
<<<<<<< HEAD

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComentarioComponent,TabsComponent,NavbarComponent,MenuLateralComponent],
  templateUrl: './homeArquivos.component.html',
  styleUrl: './homeArquivos.component.css'
=======
import { ListaCompartilhadaComponent } from '../../components/lista-compartilhada/lista-compartilhada.component';
>>>>>>> f662d8b68eb434afe7719a844191ddb518e68e41

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './homeArquivos.component.html',
    styleUrl: './homeArquivos.component.css',
    imports: [ComentarioComponent, TabsComponent, NavbarComponent, MenuLateralComponent, ListaCompartilhadaComponent]
})
export class HomeComponent {

}
