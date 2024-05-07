import { Routes } from '@angular/router';
import { RelatorioComponent } from './components/relatorio/relatorio.component';

import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
  {
    path: 'page',
    loadComponent: () => import('./components/comentario/comentario.component'),
  },
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'relatorio', component: RelatorioComponent },
];
