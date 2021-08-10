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
  // album: any = [];
  hidden = false;

  constructor(private dialog: MatDialog, private lightbox: Lightbox, @Inject(MAT_DIALOG_DATA) public album: any ) {
    // this.album.push({
    //   src: this.album,
    //   thumb: this.album
    // });
    // this.album.push({
    //   src: 'assets/images/our-story-image.png',
    //   thumb: 'assets/images/our-story-image.png'
    // });
    // this.album.push({
    //   src: 'assets/images/view-image-event-details.png',
    //   thumb: 'assets/images/view-image-event-details.png'
    // });
    // this.album.push({
    //   src: 'assets/images/our-story-image.png',
    //   thumb: 'assets/images/our-story-image.png'
    // });
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    console.log('photo', this.album);
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
    console.log(index);
  }

  close() {
    this.dialog.closeAll();
  }

  next(current: number): void {
    this.current = current + 1;
  }

  prev(current: number): void {
    this.current = current - 1;
  }

  // next(current: number): void {
  //   if (this.current >= 0) {
  //     this.current = current + 1;
  //   }
  //   // } else if (this.current == this.album.length) {
  //   //   this.current = current - this.album.length;
  //   // }
  // }

  // prev(current: number): void {
  //   if (this.current > 0) {
  //     this.current = current - 1;
  //   } else if (this.current <= 0) {
  //     this.current = current + this.album.length;
  //   }
  // }
}
