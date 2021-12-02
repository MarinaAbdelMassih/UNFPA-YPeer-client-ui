import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {latestCardItem} from "../../../../../../../../../../src/app/shared/models/home.model";
import {LanguageService} from '../../../../../../../../../../src/app/shared/services/language.service';

@Component({
  selector: 'app-latest-carousel',
  templateUrl: './latest-carousel.component.html',
  styleUrls: ['./latest-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LatestCarouselComponent implements OnInit, AfterViewInit {
  @Input() latestSections: latestCardItem[];
  @ViewChild('latestSlickModal', {static: false}) slickModal;
  latestConfig: any = {"slidesToShow": 3, "rtl": false, "slidesToScroll": 1,"arrows": false, "fade": false,
    "cssEase": 'linear', "dots": false,"autoplay": true, "autoplaySpeed": 10000, infinite: false,
    "responsive": [
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
    ]};
  isArabic: boolean = this.languageService.getIsArabic();

  constructor(private router: Router, private languageService: LanguageService) { }

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
    if (this.latestSections) {
      this.slickModal.unslick();
      this.latestConfig.rtl = this.isArabic;
      this.slickModal.initSlick();
    }
  }
}
