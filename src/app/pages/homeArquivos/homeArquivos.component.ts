import { Component } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { ListaCompartilhadaComponent } from '../../components/lista-compartilhada/lista-compartilhada.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComentarioComponent,TabsComponent,NavbarComponent,MenuLateralComponent, ListaCompartilhadaComponent],
  templateUrl: './homeArquivos.component.html',
  styleUrl: './homeArquivos.component.css'
})
export class HomeComponent {

}