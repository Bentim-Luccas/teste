import { Component, OnInit } from '@angular/core';
import { Arquivo } from '../../../interface/arquivo';
import { ArquivoService } from '../../../service/arquivo.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

  listaArquivos: Arquivo[] = []

  constructor(private arquivoService: ArquivoService){}

  ngOnInit(): void {
    this.arquivoService.findAll().pipe(first()).subscribe(data => {
      this.listaArquivos = data
      console.log(data)
    })
 }


}
