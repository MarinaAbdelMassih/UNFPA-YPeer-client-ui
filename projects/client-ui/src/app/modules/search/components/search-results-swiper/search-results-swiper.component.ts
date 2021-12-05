import {AfterViewInit, Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {Router} from '@angular/router';
import {searchListItem} from '../../../../../../../../src/app/shared/models/search.model';

@Component({
  selector: 'app-search-results-swiper',
  templateUrl: './search-results-swiper.component.html',
  styleUrls: ['./search-results-swiper.component.scss']
})
export class SearchResultsSwiperComponent implements OnInit, AfterViewInit {

  @Input() title: {AR: string, EN: string};
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  isArabic: boolean = this.languageService.getIsArabic();
  isMobile: boolean = false;
  size: number;

  @HostListener("window:resize", ['$event'])
  onResize(event) {
    this.size = event.target.innerWidth;
    this.isMobile = this.size <= 992;
  }
  constructor(private router: Router, private languageService: LanguageService) {
  }

  ngOnInit() {
    this.size = window.innerWidth;
    this.isMobile = this.size <= 992;
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

  openDetailsPage(id): void {
    switch (this.searchType) {
      case 'newsListItem':  this.router.navigate(['/news-details/' + id]); break;
      case 'eventsListItem': this.router.navigate(['/event-details/' + id]); break;
      case 'storiesListItem': this.router.navigate(['/story-details/' + id]); break;
      case 'publicationsListItem': this.router.navigate(['/publication-details/' + id]); break;
      case 'trainingsListItem': this.router.navigate(['/training-details/' + id]); break;
    }
  }

}
