import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {eventsListItem} from "../../../../../../../../src/app/shared/models/events.model";

@Component({
  selector: 'app-event-details-might-like',
  templateUrl: './event-details-might-like.component.html',
  styleUrls: ['./event-details-might-like.component.scss']
})
export class EventDetailsMightLikeComponent implements OnInit {

  @Input() cardDetails: eventsListItem[];
  @ViewChild('latestSlickModal', {static: false}) slickModal;
  latestConfig: any = {
    slidesToShow: 3, rtl: false, slidesToScroll: 1, arrows: false, fade: false,
    cssEase: 'linear', dots: false, autoplay: false, autoplaySpeed: 2000, infinite: false,
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

  constructor(private router: Router, private languageService: LanguageService) {
  }

  ngOnInit() {
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
    if (this.cardDetails && this.cardDetails.length) {
      this.slickModal.unslick();
      this.latestConfig.rtl = this.isArabic;
      this.slickModal.initSlick();
    }
  }

  openDetailsPage(): void {
    this.router.navigate(['']);
  }

}

