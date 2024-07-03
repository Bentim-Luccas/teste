import { Component, Input, OnInit, input } from '@angular/core';
import { Arquivo } from '../../../interface/arquivo';
import { ArquivoService } from '../../../service/arquivo.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

  @Input() listaArquivos: Arquivo[] = []
  @Input() listaArquivosAprovados: Arquivo[] = []
  @Input() listaArquivosReprovados: Arquivo[] = []
  @Input() listaArquivosPendentes: Arquivo[] = []
  @Input() listaUsuarios: any[] = []
  @Input() listaUsuariosAtivos: any[] = []
  @Input() listaEmpresas: any[] = []
  @Input() listaProjetos: any[] = []

    constructor(private arquivoService: ArquivoService){}

  ngOnInit(): void {

 }
}
