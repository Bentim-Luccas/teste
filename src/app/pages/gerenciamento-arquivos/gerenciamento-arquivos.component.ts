import { Component } from '@angular/core';
import { ArquivoTagComponent } from '../../components/gerenciamento-arquivos-components/arquivo-tag/arquivo-tag.component'
import { BarraPesquisaComponent } from '../../components/gerenciamento-arquivos-components/barra-pesquisa/barra-pesquisa.component'
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component'
import { ModalButtonComponent, ModalEnviarArquivoComponent } from '../../components/gerenciamento-arquivos-components/modal-enviar-arquivo/modal-enviar-arquivo.component'
import { ModalMudarAcessoComponent } from '../../components/gerenciamento-arquivos-components/modal-mudar-acesso/modal-mudar-acesso.component'
import { TabelaArquivosComponent } from '../../components/gerenciamento-arquivos-components/tabela-arquivos/tabela-arquivos.component'
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';

@Component({
  selector: 'app-gerenciamento-arquivos',
  standalone: true,
  imports: [ArquivoTagComponent, BarraPesquisaComponent, BreadcrumbComponent, ModalButtonComponent,
     ModalEnviarArquivoComponent, ModalMudarAcessoComponent, TabelaArquivosComponent, NavbarComponent, MenuLateralComponent],
  templateUrl: './gerenciamento-arquivos.component.html',
  styleUrl: './gerenciamento-arquivos.component.css'
})
export class GerenciamentoArquivosComponent {

}
