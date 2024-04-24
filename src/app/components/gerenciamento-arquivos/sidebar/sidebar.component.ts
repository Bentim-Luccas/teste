import { Component } from '@angular/core';
import { TreeComponent } from './tree/tree.component'
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TreeComponent, MatIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
