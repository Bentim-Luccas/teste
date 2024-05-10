import { Component } from '@angular/core';

@Component({
  selector: 'app-arquivo-tag',
  standalone: true,
  imports: [],
  templateUrl: './arquivo-tag.component.html',
  styleUrl: './arquivo-tag.component.css'
})
export class ArquivoTagComponent {

  tags: Tag[] = [
    {
      nome: 'subsolo',
      color: 'white'
    },
    {
      nome: 'projeto legal',
      color: 'red'
    },
    {
      nome: 'liberado para obra',
      color: 'green'
    },
  ]
}

export class Tag {
  nome!: string;
  color!: string;
}

