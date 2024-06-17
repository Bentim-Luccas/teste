import { GerenciamentoUsuarioComponent } from './pages/gerenciamento-usuario/gerenciamento-usuario.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/homeArquivos/homeArquivos.component';

import { LoginemailComponent } from './components/loginemail/loginemail.component';
import { emailGuard } from './guard/email.guard';
import { LogintokenComponent } from './components/logintoken/logintoken.component';
import { tokenGuard } from './guard/token.guard';
import { InicialComponent } from './components/inicial/inicial.component';
import { inicialGuard } from './guard/inicial.guard';
import { LoginjwtComponent } from './components/loginjwt/loginjwt.component';
import { GerenciamentoArquivosComponent } from './pages/gerenciamento-arquivos/gerenciamento-arquivos.component';
import { RelatorioComponent } from './pages/relatorio/relatorio-dashboard.component';
import { ListaCompartilhadaComponent } from './pages/lista-compartilhada/lista-compartilhada.component';
import { GerenciamentoDisciplinasComponent } from './pages/gerenciamento-disciplinas/gerenciamento-disciplinas.component';
import { GerenciamentoEtapasComponent } from './pages/gerenciamento-etapas/gerenciamento-etapas.component';
import { GerenciamentoNotificationComponent } from './pages/gerenciamento-notification/gerenciamento-notification.component';

export const routes: Routes = [
  {
    path: 'page',
    loadComponent: () => import('./components/comentario/comentario.component')
  },
  {

    path: '',
    component: HomeComponent
  },
  { path: 'listaCompartilhada', component: ListaCompartilhadaComponent },
  { path: 'loginemail', component: LoginemailComponent, canActivate: [emailGuard] },
  { path: 'logintoken', component: LogintokenComponent, canActivate: [tokenGuard] },
  { path: 'inicial', component: InicialComponent, canActivate: [inicialGuard] },
  {
    path: 'etapas',
    component: GerenciamentoEtapasComponent
  },
  { path: 'loginjwt/:jwt', component: LoginjwtComponent },
  {
    path: 'disciplinas',
    component: GerenciamentoDisciplinasComponent
  },
  {
    path: 'usuarios',
    component: GerenciamentoUsuarioComponent
  },
  {
    path: 'arquivos',
    component: GerenciamentoArquivosComponent
  }
  , { path: 'relatorio', component: RelatorioComponent },

  {
    path: 'notificacao', component: GerenciamentoNotificationComponent

  }
];
