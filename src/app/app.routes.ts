import { Routes } from '@angular/router';
import { HomeComponent } from './pages/homeArquivos/homeArquivos.component';
import { GerenciamentoDisciplinaComponent } from './pages/gerenciamento-disciplina/gerenciamento-disciplina.component';

export const routes: Routes = [
  {
    path: 'page',
    loadComponent: () => import('./components/comentario/comentario.component'),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'disciplina',
    component: GerenciamentoDisciplinaComponent
  }
];
