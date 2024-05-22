import { Routes } from '@angular/router';
import { HomeComponent } from './pages/homeArquivos/homeArquivos.component';
import { ListaCompartilhadaComponent } from './components/lista-compartilhada/lista-compartilhada.component';
export const routes: Routes = [
    {
        path:'page',
        loadComponent : () => import('./components/comentario/comentario.component')

    },
    {
        path:'' ,
        component:HomeComponent
    },
    {
        path:'listaCompartilhada',
        component: ListaCompartilhadaComponent
    }

];