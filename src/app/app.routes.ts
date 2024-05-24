import { Routes } from '@angular/router';
import { HomeComponent } from './pages/homeArquivos/homeArquivos.component';

import { ListaCompartilhadaComponent } from './components/lista-compartilhada/lista-compartilhada.component';
import { LoginemailComponent } from './components/loginemail/loginemail.component';
import { emailGuard } from './guard/email.guard';
import { LogintokenComponent } from './components/logintoken/logintoken.component';
import { tokenGuard } from './guard/token.guard';
import { InicialComponent } from './components/inicial/inicial.component';
import { inicialGuard } from './guard/inicial.guard';
import { LoginjwtComponent } from './components/loginjwt/loginjwt.component';
import { GerenciamentoArquivosComponent } from './pages/gerenciamento-arquivos/gerenciamento-arquivos.component';
import { RelatorioComponent } from './pages/relatorio/relatorio-dashboard.component';
export const routes: Routes = [
    {
        path:'page',
        loadComponent : () => import('./components/comentario/comentario.component')

    },
    {

        path:'' ,
        component:HomeComponent
    },
    {path:'listaCompartilhada', component: ListaCompartilhadaComponent},
    {path:'loginemail', component:LoginemailComponent,canActivate:[emailGuard] },
    {path:'logintoken', component:LogintokenComponent, canActivate:[tokenGuard]},
    {path:'inicial',component:InicialComponent, canActivate:[inicialGuard]},
    {path:'loginjwt/:jwt',component:LoginjwtComponent},
    {
      path: 'arquivos',
      component: GerenciamentoArquivosComponent
    }
    ,{ path: 'relatorio', component: RelatorioComponent },
];
