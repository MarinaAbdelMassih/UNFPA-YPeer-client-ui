import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-event-details-view-image',
  templateUrl: './event-details-view-image.component.html',
  styleUrls: ['./event-details-view-image.component.scss']
})
export class EventDetailsViewImageComponent implements OnInit {
  current = 0;
  album: any = [];

  constructor(private dialog: MatDialog, private lightbox: Lightbox) {
    this.album.push({
      src: 'assets/images/view-image-event-details.png',
      thumb: 'assets/images/view-image-event-details.png'
    });
    this.album.push({
      src: 'assets/images/our-story-image.png',
      thumb: 'assets/images/our-story-image.png'
    });
    this.album.push({
      src: 'assets/images/view-image-event-details.png',
      thumb: 'assets/images/view-image-event-details.png'
    });
    this.album.push({
      src: 'assets/images/our-story-image.png',
      thumb: 'assets/images/our-story-image.png'
    });
  }

  ngOnInit() {
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
    console.log(index);
  }

  close() {
    this.dialog.closeAll();
  }

  next(current: number): void {
    if (this.current >= 0) {
      this.current = current + 1;
    } else if (this.current == this.album.length) {
      this.current = current - this.album.length;
    }
  }

  prev(current: number): void {
    if (this.current > 0) {
      this.current = current - 1;
    } else if (this.current <= 0) {
      this.current = current + this.album.length;
    }
  }
}
