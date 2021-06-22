import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from "../../../../../../../../src/app/shared/services/language.service";
import {sliderItem} from "../../../../../../../../src/app/shared/models/home.model";

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss']
})
export class TopSliderComponent implements OnInit, AfterViewInit {

  isArabic: boolean = this.langService.getIsArabic();
  @Input() slides: sliderItem[];
  @ViewChild('bannersSlickModal', {static: false}) slickModal;
  bannerConfig: any = {"slidesToShow": 1, "rtl": this.isArabic, "slidesToScroll": 1,"arrows": false, "fade": true,
    "cssEase": 'linear', "dots": false,"autoplay": false, "autoplaySpeed": 2000};

  constructor(private langService: LanguageService) { }

  ngOnInit() {
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