import { Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogRef
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

// botao
@Component({
  selector: 'app-lista-compartilhada-modal-button',
  standalone: true,
  imports: [MatButtonModule, MatIcon],
  templateUrl: './lista-compartilhada-modal-button.component.html',
})
export class ListaCompartilhadaModalButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(){
    this.dialog.open(ListaCompartilhadaModalComponent);
  }
}

// Modal
@Component({
  selector: 'app-lista-compartilhada-modal',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIcon, FormsModule, ReactiveFormsModule],
  templateUrl: './lista-compartilhada-modal.component.html'
})
export class ListaCompartilhadaModalComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<ListaCompartilhadaModalComponent>) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
