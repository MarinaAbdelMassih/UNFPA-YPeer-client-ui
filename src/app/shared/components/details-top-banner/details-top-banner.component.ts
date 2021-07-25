import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-top-banner',
  templateUrl: './details-top-banner.component.html',
  styleUrls: ['./details-top-banner.component.scss']
})
export class DetailsTopBannerComponent implements OnInit {
  @Input() data;

  constructor() {
  }

  ngOnInit() {
  }

}
