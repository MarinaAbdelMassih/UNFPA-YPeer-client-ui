import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {MatDialog} from '@angular/material';
import {EventDetailsViewImageComponent} from '../event-details-view-image/event-details-view-image.component';
import {EventsResolverService} from "../../../../../../../../src/app/shared/services/events-resolver.service";

@Component({
  selector: 'app-event-details-photos',
  templateUrl: './event-details-photos.component.html',
  styleUrls: ['./event-details-photos.component.scss']
})
export class EventDetailsPhotosComponent implements OnInit {
  @Input() photos: [];
  @ViewChild('latestSlickModal', {static: false}) slickModal;
  latestConfig: any = {
    slidesToShow: 3, rtl: false, slidesToScroll: 1, arrows: false, fade: false,
    cssEase: 'linear', dots: false, autoplay: true, autoplaySpeed: 10000, infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  isArabic: boolean = this.languageService.getIsArabic();
  show = -1;

  constructor(private router: Router, private languageService: LanguageService, public dialog: MatDialog,
              private eventsService: EventsResolverService) {
  }

  ngOnInit() {
  }

  onHover(i: number) {
    this.show = i;
  }

  openDialog(photos, index): void {
    this.eventsService.selectedGalleryImageIndex.next(index);
    const dialogRef = this.dialog.open(EventDetailsViewImageComponent, {
      width: '80%', data: photos = this.photos
    });

  }

  ngAfterViewInit() {
    this.reInitSlick();
    this.languageService.isArabic.subscribe(isArabic => {
      this.isArabic = isArabic;
      this.reInitSlick();
    });
  }

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  private reInitSlick(): void {
    if (this.photos) {
      this.slickModal.unslick();
      this.latestConfig.rtl = this.isArabic;
      this.slickModal.initSlick();
    }
  }

  openDetailsPage(): void {
    this.router.navigate(['']);
  }

}


