import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { ModalEditarProjetoComponent } from "../modal-editar-projeto.component";

@Component({
    selector: 'app-btn-modal-editar-projeto',
    templateUrl: 'btn-modal-editar-projeto.component.html',
    standalone: true,
    imports: [],
  })
  export class BtnModalEditarProjeto {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(ModalEditarProjetoComponent);
    }
  }