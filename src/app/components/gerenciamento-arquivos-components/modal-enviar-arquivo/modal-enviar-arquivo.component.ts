import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ArquivoService } from '../../../service/arquivo.service';
import { Arquivo } from './../../../interface/arquivo';
import { TagsComponent } from "./tags/tags.component";

// BOTAO
@Component({
  selector: 'app-modal-button',
  templateUrl: 'modal-button.component.html',
  standalone: true,
  imports: [MatButtonModule, TagsComponent, MatIcon],
})
export class ModalButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalEnviarArquivoComponent);
  }
}



// MODAL
@Component({
  selector: 'app-modal-enviar-arquivo',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, TagsComponent, MatIcon, FormsModule, ReactiveFormsModule],
  templateUrl: './modal-enviar-arquivo.component.html',
})
export class ModalEnviarArquivoComponent implements OnInit{
  selectedFileName: string | null = null;
  formulario: FormGroup
  arquivo: Arquivo = new Arquivo();
  selectedFile!: File | null;

  constructor(private arquivoService: ArquivoService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      file_name: ['', Validators.required]
  })
  }

  ngOnInit(): void {

  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.selectedFileName = this.selectedFile.name;
    } else {
      this.selectedFileName = null;
      this.selectedFile = null;
    }
  }

  onSubmit(){
    this.arquivo.arquivo_descricao = this.formulario.get('file_name')?.value
    this.arquivo.arquivo_link = 'http://www.google.com'
    this.arquivo.arquivo_status = 0
    this.arquivo.usuario_id = 5
    this.arquivo.etapa_id = 1
    this.arquivo.projeto_id = 4
    console.log(this.selectedFile)
    console.log(this.arquivo)
    this.arquivoService.postArquivo(this.arquivo).subscribe(response => {
      console.log('Upload successful', response);
      // Faça o que for necessário com a resposta do servidor
    })
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}
