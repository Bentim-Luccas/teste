import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../../service/disciplina.service';
import { Router } from '@angular/router';
import { Disciplina } from '../../../interface/disciplina';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-lateral-disciplina',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-lateral-disciplina.component.html',
  styleUrl: './menu-lateral-disciplina.component.css'
})
export class MenuLateralDisciplinaComponent implements OnInit{
  constructor(private disciplinaService: DisciplinaService, private router: Router) { }

  disciplinas: Disciplina[] = [];
  isDropdownOpen: boolean[] = [];

  ngOnInit(): void {
    this.getDisciplinas();
  }

  getDisciplinas(): void {
    this.disciplinaService.findAll().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
    });
  }

  toggleDropdown(disciplina: any) {
    disciplina.dropdownOpen = !disciplina.dropdownOpen;
}

  listaCompartilhada() {
    this.router.navigate(['/listaCompartilhada'])
  }
}