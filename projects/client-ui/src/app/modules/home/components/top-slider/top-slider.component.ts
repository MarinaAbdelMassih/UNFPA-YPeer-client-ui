import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SliderResolverService} from "../../../../../../../../src/app/shared/services/slider-resolver.service";
import {Subscription} from "rxjs";
import {sliderContent, sliderItem} from "../../../../../../../../src/app/shared/models/slider.model";
import {LanguageService} from "../../../../../../../../src/app/shared/services/language.service";

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss']
})
export class TopSliderComponent implements OnInit, AfterViewInit {

  isArabic: boolean = this.langService.getIsArabic();
  slides: sliderItem[];
  @ViewChild('bannersSlickModal', {static: false}) slickModal;
  bannerConfig: any = {"slidesToShow": 1, "rtl": this.isArabic, "slidesToScroll": 1,"arrows": false, "fade": true,
    "cssEase": 'linear', "dots": false,"autoplay": false, "autoplaySpeed": 2000};

  private subscriptions: Subscription[] = [];

  constructor(private sliderResolver: SliderResolverService, private langService: LanguageService) { }

  ngOnInit() {
    let slidesSub = this.sliderResolver.resolve().subscribe((slidesData: sliderContent) => {
      this.slides = slidesData.slides;
    });

    this.subscriptions.push(slidesSub);
    }

  ngAfterViewInit(): void {
    this.reinitSlick();
    this.langService.isArabic.subscribe(isArabic => {
      this.isArabic = isArabic;
      this.reinitSlick();
    });
  }

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  private reinitSlick(){
    if(this.slides){
      this.slickModal.unslick();
      this.bannerConfig.rtl = this.isArabic;
      this.slickModal.initSlick();
    }
  }

}
