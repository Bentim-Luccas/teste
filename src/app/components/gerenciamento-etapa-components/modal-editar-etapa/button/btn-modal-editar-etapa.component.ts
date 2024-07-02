import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { ModalEditarEtapaComponent } from "../modal-editar-etapa.component";

@Component({
    selector: 'app-btn-modal-editar-etapa',
    templateUrl: 'btn-modal-editar-etapa.component.html',
    standalone: true,
    imports: [],
  })
  export class BtnModalEditarEtapa {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(ModalEditarEtapaComponent);
    }
  }