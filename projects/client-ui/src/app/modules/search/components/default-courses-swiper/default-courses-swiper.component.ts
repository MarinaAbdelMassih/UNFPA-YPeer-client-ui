import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import Swiper from 'swiper/core';

@Component({
  selector: 'app-default-swiper',
  templateUrl: './default-courses-swiper.component.html',
  styleUrls: ['./default-courses-swiper.component.scss']
})
export class DefaultCoursesSwiperComponent implements OnInit, OnChanges, OnDestroy {

  @Input() searchResults: any[] = [];
  @Input() searchType: string;
  @ContentChild(TemplateRef, {static: true}) templateRef: TemplateRef<any>;
  private swiper?: Swiper;
  private initialized: boolean = false;

  constructor() {
  }

  ngOnDestroy(): void {
    if(this.swiper) {
      this.swiper.destroy(true, true);
      this.swiper = undefined;
    }
  }

  ngOnInit(): void {

  }

  initSwiper(): void {
    setTimeout(() => {
      this.swiper = new Swiper(`#courses-swiper-${this.searchType} .swiper-container`, {
        init: false,
        effect: "slide",
        slidesPerView: "auto",
        updateOnWindowResize: false,
        slidesPerColumn: 1,
        virtualTranslate: false,
        preloadImages: false,
        updateOnImagesReady: false,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
      this.swiper.init();
    }, 300);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.initialized) {
      if (this.searchResults && this.searchResults.length > 0) {
        this.initialized = true;
        this.initSwiper();
      }
    }
  }
}
