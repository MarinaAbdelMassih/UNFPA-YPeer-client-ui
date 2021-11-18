import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {eventsListItem} from '../../../../../../../../src/app/shared/models/events.model';
import {Router} from '@angular/router';
import {searchListItem} from '../../../../../../../../src/app/shared/models/search.model';

@Component({
  selector: 'app-default-swiper',
  templateUrl: './default-courses-swiper.component.html',
  styleUrls: ['./default-courses-swiper.component.scss']
})
export class DefaultCoursesSwiperComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() searchResults: any[] = [];
  @Input() searchType: string;

  @Input() cardDetails: searchListItem[];
  @ViewChild('latestSlickModal', {static: false}) slickModal;
  latestConfig: any = {
    slidesToShow: 3, rtl: false, slidesToScroll: 1, arrows: false, fade: false,
    cssEase: 'linear', dots: false, infinite: false,
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

  reloadCurrentPage() {
    window.location.reload();
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
