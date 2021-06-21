import { Injectable } from '@angular/core';
import {DataHandlerService} from "./data-handler.service";
import {Observable} from "rxjs";
import {SliderQuery} from "../queries/slider.query";
import {sliderContent, SliderModel} from "../models/slider.model";

@Injectable({
  providedIn: 'root'
})
export class SliderResolverService {

  private slidesData: sliderContent;
  constructor(private dataHandlerService: DataHandlerService) { }

  resolve(): Observable<sliderContent> {
    return new Observable<sliderContent>(subscriber => {
      if (this.slidesData) {
        subscriber.next(this.slidesData);
      } else {
        this.dataHandlerService.getDefaultPageData(SliderQuery, 'slider-info', (res) => {
          return new SliderModel(res.data.homeSlider.slidesCollection);
        }).subscribe((slidesData: sliderContent) => {
          this.slidesData = slidesData;
          subscriber.next(this.slidesData);
        },() => subscriber.next(null));
      }
    });
  }
}
