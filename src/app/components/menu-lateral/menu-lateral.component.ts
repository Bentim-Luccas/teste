import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ProjetoService } from '../../service/projeto.service';
import { Projeto } from '../../interface/projeto';


@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [NgFor],
  template: `<li *ngFor="let usuarios of usuarioresponse"></li>`,
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit  {


  constructor ( private projetoService :ProjetoService,
    private router: Router
  ){}

 projeto! : Projeto[];
  ngOnInit(): void {
    this.getProjetos();
  }
  getProjetos():void{
    this.projetoService.findAll().subscribe({
      next:(response) =>{
        response && (this.projeto = response);
      },
        error: (error) => console.log(error),
    })
  }

  listaCompartilhada(){
    this.router.navigate(['/listaCompartilhada'])
  }

}


