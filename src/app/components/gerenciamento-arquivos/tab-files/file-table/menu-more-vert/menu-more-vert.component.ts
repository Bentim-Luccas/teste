import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-menu-more-vert',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, MatDivider],
  templateUrl: './menu-more-vert.component.html',
  styleUrl: './menu-more-vert.component.css'
})
export class MenuMoreVertComponent {

}
