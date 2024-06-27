import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MarkupService } from '../../service/markup.service';
// import { Markup } from '../../interface/markup';
import { CommonModule } from '@angular/common';
import { Arquivo } from '../../interface/arquivo';
import { Subscription } from 'rxjs';
import { ArquivoService } from '../../service/arquivo.service';
import { ComentarioMarkup } from '../../interface/comentario_markup';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

export class MeuModulo { }

@Component({
  selector: 'app-markup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './markup.component.html',
  styleUrls: ['./markup.component.css']
})
export class MarkupComponent  {

  markups: ComentarioMarkup[] = [];
  // @ViewChild('novoMarkup') novoMarkupInput!: ElementRef;

  // markup: Markup = {
  //   arquivo_comentario_markup_id: 0,
  //   arquivo_comentario_markup_link_s3: "",
  //   arquivo_comentario_markup_descricao: "",
  //   arquivo_comentario_id: 0,
  //   arquivo_comentario_markup_data: null
  // };
  arquivoSelecionado: Arquivo | null = null;
  arquivoSubscription: Subscription;
  formulario: FormGroup;

  constructor(private markupService: MarkupService, private arquivoService:ArquivoService, private fb :FormBuilder) {
    this.arquivoSubscription = this.arquivoService.arquivoSelecionado$.subscribe(
      arquivo=>{
        if(arquivo?.arquivo_id){
          this.carregarMarkups(arquivo?.arquivo_id);
        }

    })
    this.formulario = this.fb.group({
      file_name :['', Validators.required],
      comentario :['', Validators.required]
    })
  }

  // ngOnInit(): void {
  //   this.carregarMarkups();
  // }

  testarForm(){
    console.log(this.formulario.value)
  }
  carregarMarkups(arquivo:string): void {
    this.markupService.findAll(arquivo).subscribe((markups) => {
      this.markups = markups.reverse();

    });
  }

  // postarMarkup() {
  //   this.markupService.post(this.markup).subscribe((markup) => {
  //     this.markups.push(markup);
  //   });
  // }

  // adicionarMarkup(): void {
  //   const novoMarkup = this.novoMarkupInput.nativeElement.value.trim();
  //   if (novoMarkup) {
  //     const markup: Markup = {
  //       arquivo_comentario_markup_id: 0,
  //       arquivo_comentario_markup_link_s3: "",
  //       arquivo_comentario_markup_descricao: novoMarkup,
  //       arquivo_comentario_id: 0,
  //       arquivo_comentario_markup_data: null
  //     };
  //     this.markupService.post(markup).subscribe((novoMarkup) => {
  //       this.markups.push(novoMarkup);
  //       this.novoMarkupInput.nativeElement.value = '';
  //     });
  //   }
  // }

  // deletarMarkup(markupId: number): void {
  //   this.markupService.remove(markupId).subscribe(() => {
  //     this.markups = this.markups.filter(
  //       (markup) => markup.arquivo_comentario_markup_id !== markupId
  //     );
  //   });
  // }
}
