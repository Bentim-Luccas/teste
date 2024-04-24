import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';

interface Disciplinas {
  name: string;
  icon: string;
  children?: Disciplinas[];
}

const TREE_DATA: Disciplinas[] = [
  {
    name: 'Favoritos',
    icon: 'star',
    children: [
      {
        name: 'Etapa 1',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
      {
        name: 'Etapa 2',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
    ],
  },
  {
    name: 'Recentes',
    icon: 'history',
    children: [
      {
        name: 'Etapa 1',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
      {
        name: 'Etapa 2',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
    ],
  },
  {
    name: 'Arquitetura',
    icon: 'inventory',
    children: [
      {
        name: 'Etapa 1',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
      {
        name: 'Etapa 2',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
    ],
  },
  {
    name: 'Elétrica',
    icon: 'inventory',
    children: [
      {
        name: 'Etapa 1',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
      {
        name: 'Etapa 2',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
    ],
  },
  {
    name: 'Fundação',
    icon: 'inventory',
    children: [
      {
        name: 'Etapa 1',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
      {
        name: 'Etapa 2',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
    ],
  },
  {
    name: 'Paisagismo',
    icon: 'inventory',
    children: [
      {
        name: 'Etapa 1',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
      {
        name: 'Etapa 2',
        icon: 'folder',
        children: [{name: 'Arquivo 1', icon: 'description',}, {name: 'Arquivo 2', icon: 'description',}],
      },
    ],
  },

];

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatListModule, MatDividerModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent {
  treeControl = new NestedTreeControl<Disciplinas>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Disciplinas>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: Disciplinas) => !!node.children && node.children.length > 0;
}
