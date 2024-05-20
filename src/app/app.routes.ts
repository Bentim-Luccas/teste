import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GerenciamentoArquivosComponent } from './pages/gerenciamento-arquivos/gerenciamento-arquivos.component'

// import { HomeComponent } from './pages/homeArquivos/homeArquivos.component';


export const routes: Routes = [
  {
    path: 'page',
    loadComponent: () => import('./components/comentario/comentario.component')
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'arquivos',
    component: GerenciamentoArquivosComponent
  }

];
