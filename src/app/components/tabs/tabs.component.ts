import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import ComentarioComponent from '../../components/comentario/comentario.component';
import { ArquivoComponent } from '../arquivo/arquivo.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [ComentarioComponent, ArquivoComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}
