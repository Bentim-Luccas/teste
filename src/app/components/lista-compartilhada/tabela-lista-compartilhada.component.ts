import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { listaCompartilhada } from '../../interface/listaCompartilhada';
import { ListaCompartilhadaService } from '../../service/listaCompartilhada.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tabela-app-lista-compartilhada',
    standalone: true,
    templateUrl: './tabela-lista-compartilhada.component.html',
    styleUrls: ['./tabela-lista-compartilhada.component.css'],
    imports: [CommonModule, RouterLink, RouterOutlet]
})
export class TabelaListaCompartilhadaComponent implements OnInit {


  constructor(
    private listaCompartilhadaService: ListaCompartilhadaService,
    private router: Router
  ){}

  ListaCompartilhada: listaCompartilhada[] = [];
  ngOnInit(): void {
    this.getListaCompartilhada();
  }

  getListaCompartilhada(): void {
    this.listaCompartilhadaService.getListaCompartilhada().subscribe({
      next: (response) => {
        response && (this.ListaCompartilhada = response);
      },
      error: (error) => console.log(error),
    });
  }

  getStatusDescription(status: number | undefined): string {
    if (status === undefined) {
      return 'Status não definido';
    } else if (status === -1) {
      return 'Deletado';
    } else if (status === 0) {
      return 'Inativo';
    } else if (status === 1) {
      return 'Ativo';
    } else {
      return 'Não definido';
    }
  }


  listaCompartilhada(): void {
    this.router.navigate(['/listaCompartilhada']);
  }
}
