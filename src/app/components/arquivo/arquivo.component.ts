import { Component, OnInit } from '@angular/core';
import { Arquivo } from '../../interface/arquivo';
import { ArquivoService } from '../../service/arquivos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arquivo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css']
})
export class ArquivoComponent implements OnInit {

  constructor(private arquivosService: ArquivoService) { }

  arquivo: Arquivo[] = [];

  ngOnInit(): void {
    this.getArquivos();
  }

  getArquivos(): void {
    this.arquivosService.getArquivo().subscribe({
      next: (response) => {
        response && (this.arquivo = response);
      },
      error: (error) => console.log(error)
    });
  }
}
