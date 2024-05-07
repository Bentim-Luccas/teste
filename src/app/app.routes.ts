import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { EtapaComponent } from './components/etapa/etapa.component';
export const routes: Routes = [
    {
        path:'page',
        loadComponent : () => import('./components/comentario/comentario.component')

    },
    // EXCLUIR POSTERIORMENTE
    {
        path:'disciplina',
        component: DisciplinaComponent
    },
    // EXCLUIR POSTERIORMENTE
    {
        path:'etapa',
        component: EtapaComponent
    },
    {
        path:'' ,component:HomeComponent
    }

];
