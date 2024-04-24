import { MatIcon } from '@angular/material/icon';
import {Component} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {TagsComponent} from "./tags/tags.component";

/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-modal-button',
  templateUrl: 'modal-button.component.html',
  standalone: true,
  imports: [MatButtonModule, TagsComponent, MatIcon],
})
export class ModalButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, TagsComponent, MatIcon],
})
export class ModalComponent {
  selectedFileName: string | null = null;

  onFileSelected(event: Event) {
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      this.selectedFileName = file.name;
    } else {
      this.selectedFileName = null;
    }
  }

  onSubmit(){
    console.log("submited")
  }
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://angular.io/license */
