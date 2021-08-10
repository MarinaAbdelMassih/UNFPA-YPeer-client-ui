import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from "../../../../../../../../src/app/shared/services/language.service";
import {testimonialItem} from "../../../../../../../../src/app/shared/models/home.model";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {

  isArabic: boolean = this.langService.getIsArabic();
  @Input() testimonialsSlides: testimonialItem[];
  @ViewChild('testimonialsSlickModal', {static: false}) slickModal;

  testimonialsConfig: any = {"slidesToShow": 1, "rtl": this.isArabic, "slidesToScroll": 1,"arrows": false, "fade": true,
    "cssEase": 'linear', "dots": true,"autoplay": true, "autoplaySpeed": 10000};

  constructor(private langService: LanguageService) { }

  ngOnInit() {
  }

  private reinitSlick(){
    if(this.testimonialsSlides){
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
