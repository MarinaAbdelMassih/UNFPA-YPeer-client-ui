import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-event-details-view-image',
  templateUrl: './event-details-view-image.component.html',
  styleUrls: ['./event-details-view-image.component.scss']
})
export class EventDetailsViewImageComponent implements OnInit {
  current = 0;

  constructor(private dialog: MatDialog, private lightbox: Lightbox, @Inject(MAT_DIALOG_DATA) public album: any) {
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    console.log('photo', this.album);
  }

  close() {
    this.dialog.closeAll();
  }

  next(current: number): void {
    this.current = current + 1;
    if (this.current == this.album.length) {
      this.current = 0;
    }
  }

  prev(current: number): void {
    this.current = current - 1;
    if (this.current < 0) {
      this.current = this.album.length - 1;
    }
  }
}
