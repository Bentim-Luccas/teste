import { Routes } from '@angular/router';
import { GerenciamentoArquivosComponent } from './components/gerenciamento-arquivos/gerenciamento-arquivos.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent : () => import('./components/comentario/comentario.component')

    },
    {
      path: 'arquivos',
      component: GerenciamentoArquivosComponent
    }

];
