import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {TranslationModel} from '../../models/translation.model';

@Component({
  selector: 'app-confirmation-pop-up',
  templateUrl: './confirmation-pop-up.component.html',
  styleUrls: ['./confirmation-pop-up.component.scss']
})
export class ConfirmationPopUpComponent implements OnInit {

  text: TranslationModel;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) data) {
    this.text = data.text;
  }

  ngOnInit() {
  }

  close(): void {
    this.dialog.closeAll();
  }
}
