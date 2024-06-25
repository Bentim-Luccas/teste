import { Component, OnInit } from '@angular/core';
import { EtapaService } from '../../../service/etapa.service';
import { Router } from '@angular/router';
import { Etapa } from '../../../interface/etapa';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-lateral-etapa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-lateral-etapa.component.html',
  styleUrl: './menu-lateral-etapa.component.css'
})
export class MenuLateralEtapaComponent implements OnInit {
  constructor(private etapaService: EtapaService, private router: Router) { }

  etapas: Etapa[] = [];

  ngOnInit(): void {
    this.getEtapas();
  }

  getEtapas(): void {
    this.etapaService.findAll().subscribe(etapas => {
      this.etapas = etapas;
    });
  }

  toggleDropdown(etapa: any) {
    etapa.dropdownOpen = !etapa.dropdownOpen;
  }

  listaCompartilhada() {
    this.router.navigate(['/listaCompartilhada'])
  }
}
