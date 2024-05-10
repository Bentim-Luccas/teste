import { Component } from '@angular/core';
import { ArquivoTagComponent } from '../../components/arquivo-tag/arquivo-tag.component'
import { BarraPesquisaComponent } from '../../components/barra-pesquisa/barra-pesquisa.component'
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component'
import { ModalButtonComponent, ModalEnviarArquivoComponent } from '../../components/modal-enviar-arquivo/modal-enviar-arquivo.component'
import { ModalMudarAcessoComponent } from '../../components/modal-mudar-acesso/modal-mudar-acesso.component'
import { TabelaArquivosComponent } from '../../components/tabela-arquivos/tabela-arquivos.component'
import { NavbarComponent } from '../../components/navbar/navbar.component'

@Component({
  selector: 'app-gerenciamento-arquivos',
  standalone: true,
  imports: [ArquivoTagComponent, BarraPesquisaComponent, BreadcrumbComponent, ModalButtonComponent, ModalEnviarArquivoComponent, ModalMudarAcessoComponent, TabelaArquivosComponent, NavbarComponent],
  templateUrl: './gerenciamento-arquivos.component.html',
  styleUrl: './gerenciamento-arquivos.component.css'
})
export class GerenciamentoArquivosComponent {

}
