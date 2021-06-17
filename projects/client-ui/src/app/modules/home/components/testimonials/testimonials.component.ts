import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  slides = [{text: 'first image', image: '/assets/images/testimonials.png'}, {text: 'second image', image: '/assets/img/image2.png'}];
  @ViewChild('testimonialsSlickModal', {static: false}) slickModal;
  testimonialsConfig: any = {"slidesToShow": 1, "rtl": false, "slidesToScroll": 1,"arrows": false, "fade": true,
    "cssEase": 'linear', "dots": true,"autoplay": false, "autoplaySpeed": 2000};

  constructor() { }

  ngOnInit() {
  }

}
