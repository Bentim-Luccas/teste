import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { ModalCriarProjetoComponent } from "../modal-criar-projeto.component";

@Component({
    selector: 'app-btn-modal-criar-projeto',
    templateUrl: 'btn-modal-criar-projeto.component.html',
    standalone: true,
    imports: [],
  })
  export class BtnModalCriarProjeto {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(ModalCriarProjetoComponent);
    }
  }