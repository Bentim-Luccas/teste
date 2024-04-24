import { Component, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FileTableComponent } from './file-table/file-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-files',
  standalone: true,
  imports: [MatTabsModule, FileTableComponent, CommonModule],
  templateUrl: './tab-files.component.html',
  styleUrl: './tab-files.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TabFilesComponent {

  tabs: string[] = ['AP', 'PL', 'PB', 'PR', 'EX', 'AB']
  constructor(){}
}
