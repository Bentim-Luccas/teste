
import { Component } from "@angular/core";
import { MatDialog, MatDialogContent } from '@angular/material/dialog';
import { ModalEditarDisciplinaComponent } from "../modal-editar-disciplina.component";


@Component({
    selector: 'app-btn-modal-editar-disciplina',
    templateUrl: 'btn-modal-editar-disciplina.component.html',
    standalone: true,
    imports: [MatDialogContent],
  })
  export class BtnModalEditarDisciplina {
    constructor(public dialog: MatDialog) {}

    openDialog() {
      this.dialog.open(ModalEditarDisciplinaComponent);
    }
  
  }