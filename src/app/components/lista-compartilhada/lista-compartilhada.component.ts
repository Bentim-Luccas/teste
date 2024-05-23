import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { listaCompartilhada } from '../../interface/listaCompartilhada';
import { ListaCompartilhadaService } from '../../service/listaCompartilhada.service';
import { CommonModule } from '@angular/common';
import { TabsComponent } from "../tabs/tabs.component";
import { HomeComponent } from '../../pages/homeArquivos/homeArquivos.component';

@Component({
    selector: 'app-lista-compartilhada',
    standalone: true,
    templateUrl: './lista-compartilhada.component.html',
    styleUrls: ['./lista-compartilhada.component.css'],
    imports: [NavbarComponent, MenuLateralComponent, CommonModule, TabsComponent, HomeComponent]
})
export class ListaCompartilhadaComponent implements OnInit {


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