import { Component } from '@angular/core';
import { ModalMudarAcessoComponent } from '../gerenciamento-arquivos-components/modal-mudar-acesso/modal-mudar-acesso.component'

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [ModalMudarAcessoComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

}
