import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-top-banner',
  templateUrl: './page-top-banner.component.html',
  styleUrls: ['./page-top-banner.component.scss']
})
export class PageTopBannerComponent implements OnInit {
  @Input() imageSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
