import { Component, OnInit } from '@angular/core';
import {SliderQuery} from "../../queries/slider.query";
import {DataHandlerService} from "../../services/data-handler.service";

@Component({
  selector: 'app-page-top-banner',
  templateUrl: './page-top-banner.component.html',
  styleUrls: ['./page-top-banner.component.scss']
})
export class PageTopBannerComponent implements OnInit {

  constructor(private dataHandlerService: DataHandlerService) { }

  ngOnInit() {
    this.dataHandlerService.getDefaultPageData(SliderQuery, 'slider-info', res => console.log(res)).subscribe(data => console.log(data))
  }

}
