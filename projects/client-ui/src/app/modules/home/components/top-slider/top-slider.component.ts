import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss']
})
export class TopSliderComponent implements OnInit {

  slides = [{text: 'first image', image: '/assets/img/image1.png'}, {text: 'second image', image: '/assets/img/image2.png'}];
  @ViewChild('bannersSlickModal', {static: false}) slickModal;
  bannerConfig: any = {"slidesToShow": 1, "rtl": false, "slidesToScroll": 1,"arrows": false, "fade": true,
    "cssEase": 'linear', "dots": false,"autoplay": false, "autoplaySpeed": 2000};

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

}
