import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {latestCardItem} from "../../../../../../../../../../src/app/shared/models/home.model";

@Component({
  selector: 'app-latest-carousel',
  templateUrl: './latest-carousel.component.html',
  styleUrls: ['./latest-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LatestCarouselComponent implements OnInit {

  @ViewChild('latestSlickModal', {static: false}) slickModal;
  latestConfig: any = {"slidesToShow": 3, "rtl": false, "slidesToScroll": 1,"arrows": false, "fade": false,
    "cssEase": 'linear', "dots": false,"autoplay": false, "autoplaySpeed": 2000, infinite: false,
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

  @Input() latestSections: latestCardItem[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

  openDetailsPage(): void {
    this.router.navigate(['']);
  }

}
