import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjetoService } from '../../../service/projeto.service';
import { Projeto } from '../../../interface/projeto';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-criar-projeto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-criar-projeto.component.html',
  styleUrl: './modal-criar-projeto.component.css'
})
export class ModalCriarProjetoComponent {
  
  projetoForm = new FormGroup({
    projeto_descricao: new FormControl('', Validators.required),
    /**
    projeto_data_inicio: new FormControl('', Validators.required),
    projeto_data_fim: new FormControl('', Validators.required),
    */
    projeto_orcamento: new FormControl('', Validators.required),
    empresa_id: new FormControl(4, Validators.required)

  });

  constructor(private projetoService: ProjetoService,
    public dialogRef: MatDialogRef<ModalCriarProjetoComponent>
  ) {}

  onSubmit() {
    console.log(this.projetoForm.value);
    this.projetoService.post(<Projeto>this.projetoForm.value).subscribe({
      next:(response) =>{
        console.log(response);
      },
      error: (error) => console.log(error),
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
