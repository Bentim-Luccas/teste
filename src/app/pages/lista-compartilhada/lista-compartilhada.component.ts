import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { listaCompartilhada } from '../../interface/listaCompartilhada';
import { ListaCompartilhadaService } from '../../service/listaCompartilhada.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compartilhada',
  standalone: true,
  imports: [NavbarComponent, MenuLateralComponent, CommonModule],
  templateUrl: './lista-compartilhada.component.html',
  styleUrls: ['./lista-compartilhada.component.css']
})
export class ListaCompartilhadaComponent implements OnInit {

  constructor(
    private listaCompartilhadaService: ListaCompartilhadaService,
    private router: Router
  ){}

  ListaCompartilhada: listaCompartilhada[] = []; // Certifique-se de inicializar como um array vazio
  ngOnInit(): void {
    this.getListaCompartilhada();
  }

  getListaCompartilhada(): void {
    this.listaCompartilhadaService.getListaCompartilhada().subscribe({
      next: (response) => {
        console.log(response); // Adicione este console.log para verificar os dados recebidos
        response && (this.ListaCompartilhada = response);
      },
      error: (error) => console.log(error),
    });
  }

  listaCompartilhada(): void {
    this.router.navigate(['/listaCompartilhada']);
  }
}