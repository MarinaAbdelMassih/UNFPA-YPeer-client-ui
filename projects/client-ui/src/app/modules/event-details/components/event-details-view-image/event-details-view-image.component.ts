import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {Lightbox} from 'ngx-lightbox';
import {EventsResolverService} from '../../../../../../../../src/app/shared/services/events-resolver.service';

@Component({
  selector: 'app-event-details-view-image',
  templateUrl: './event-details-view-image.component.html',
  styleUrls: ['./event-details-view-image.component.scss']
})
export class EventDetailsViewImageComponent implements OnInit {
  current = 0;

  constructor(private dialog: MatDialog, private lightbox: Lightbox, @Inject(MAT_DIALOG_DATA) public album: any,
              private eventsService: EventsResolverService) {
  }

  ngOnInit() {
    this.getCurrentPhotoAlbum();
  }

  getCurrentPhotoAlbum() {
    let currentIndex = this.eventsService.selectedGalleryImageIndex.getValue();
    if (currentIndex) {
      this.current = currentIndex;
    }
  }

  close() {
    this.eventsService.selectedGalleryImageIndex.next(0);
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
