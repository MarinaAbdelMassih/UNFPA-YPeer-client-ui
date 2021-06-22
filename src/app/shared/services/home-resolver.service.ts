import { Injectable } from '@angular/core';
import {DataHandlerService} from "./data-handler.service";
import {Observable} from "rxjs";
import {HomeQuery} from "../queries/home.query";
import {homeContent, HomeModel} from "../models/home.model";

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService {

  private homeData: homeContent;
  constructor(private dataHandlerService: DataHandlerService) { }

  resolve(): Observable<homeContent> {
    return new Observable<homeContent>(subscriber => {
      if (this.homeData) {
        subscriber.next(this.homeData);
      } else {
        this.dataHandlerService.getDefaultPageData(HomeQuery, 'home', (res) => {
          return new HomeModel(res.data.homeSlider);
        }).subscribe((homeData: homeContent) => {
          this.homeData = homeData;
          subscriber.next(this.homeData);
        },() => subscriber.next(null));
      }
    });
  }
}
