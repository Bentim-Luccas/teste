import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component'
import { SearchbarComponent } from './searchbar/searchbar.component'
import { ModalButtonComponent, ModalComponent } from "./modal/modal.component";
import { TabFilesComponent } from './tab-files/tab-files.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'

@Component({
  selector: 'app-gerenciamento-arquivos',
  standalone: true,
  imports: [SidebarComponent, SearchbarComponent, ModalComponent, ModalButtonComponent, TabFilesComponent, BreadcrumbComponent],
  templateUrl: './gerenciamento-arquivos.component.html',
  styleUrl: './gerenciamento-arquivos.component.css'
})
export class GerenciamentoArquivosComponent {

}
