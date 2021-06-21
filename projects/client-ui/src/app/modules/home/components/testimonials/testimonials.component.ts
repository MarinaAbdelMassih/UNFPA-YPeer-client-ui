import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from "../../../../../../../../src/app/shared/services/language.service";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {

  isArabic: boolean = this.langService.getIsArabic();
  slides = [{text: 'first image', image: '/assets/images/testimonials.png'}, {text: 'second image', image: '/assets/images/image2.png'}];
  @ViewChild('testimonialsSlickModal', {static: false}) slickModal;

  testimonialsConfig: any = {"slidesToShow": 1, "rtl": this.isArabic, "slidesToScroll": 1,"arrows": false, "fade": true,
    "cssEase": 'linear', "dots": true,"autoplay": false, "autoplaySpeed": 2000};

  constructor(private langService: LanguageService) { }

  ngOnInit() {
  }

  private reinitSlick(){
    if(this.slides){
      this.slickModal.unslick();
      this.testimonialsConfig.rtl = this.isArabic;
      this.slickModal.initSlick();
    }
  }

  ngAfterViewInit(): void {
    this.reinitSlick();
    this.langService.isArabic.subscribe(isArabic => {
      this.isArabic = isArabic;
      this.reinitSlick();
    });
  }

}
