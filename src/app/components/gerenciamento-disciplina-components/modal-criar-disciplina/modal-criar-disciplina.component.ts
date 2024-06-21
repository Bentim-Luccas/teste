import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisciplinaService } from '../../../service/disciplina.service';
import { Disciplina } from '../../../interface/disciplina';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-criar-disciplina',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogContent],
  templateUrl: './modal-criar-disciplina.component.html',
  styleUrl: './modal-criar-disciplina.component.css'
})
export class ModalCriarDisciplinaComponent {

  exibirModal: boolean = false;

  disciplinaForm = new FormGroup({
    disciplina_descricao: new FormControl('', Validators.required),
    projeto_id: new FormControl(4, Validators.required),
    disciplina_status: new FormControl(1, Validators.required),
  });

  constructor(private disciplinaService: DisciplinaService,
    private dialogRef: MatDialogRef<ModalCriarDisciplinaComponent>
  ) { }

  onSubmit() {
    console.log(this.disciplinaForm.value);
    this.disciplinaService.post(<Disciplina>this.disciplinaForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    })
  }

  fecharModal(): void {
    this.dialogRef.close();
}


}