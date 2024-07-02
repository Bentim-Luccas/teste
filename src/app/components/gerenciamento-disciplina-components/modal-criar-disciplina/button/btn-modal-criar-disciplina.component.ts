import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { ModalCriarDisciplinaComponent } from "../modal-criar-disciplina.component";

@Component({
    selector: 'app-btn-modal-criar-disciplina',
    templateUrl: 'btn-modal-criar-disciplina.component.html',
    standalone: true,
    imports: [],
  })
  export class BtnModalCriarDisciplina {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(ModalCriarDisciplinaComponent);
    }
  }