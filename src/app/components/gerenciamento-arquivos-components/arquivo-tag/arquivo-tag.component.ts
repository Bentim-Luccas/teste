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
      color: 'gray-300'
    },
    {
      nome: 'projeto legal',
      color: 'red-400'
    },
    {
      nome: 'liberado para obra',
      color: 'green-400'
    },
  ]
}

export class Tag {
  nome!: string;
  color!: string;
}

