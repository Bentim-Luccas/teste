import { MatDialog } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { ModalCriarEtapaComponent } from "../modal-criar-etapa.component";

@Component({
    selector: 'app-btn-modal-criar-etapa',
    templateUrl: 'btn-modal-criar-etapa.component.html',
    standalone: true,
    imports: [],
  })
  export class BtnModalCriarEtapa {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(ModalCriarEtapaComponent);
    }
  }