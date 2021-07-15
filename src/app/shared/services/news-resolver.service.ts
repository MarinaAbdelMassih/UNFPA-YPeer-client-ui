import { Injectable } from '@angular/core';
import {newsContent, NewsModel} from '../models/news.model';
import {Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {NewsQuery} from '../queries/news.query';

@Injectable({
  providedIn: 'root'
})
export class NewsResolverService {

  private newsData: newsContent;
  constructor(private dataHandlerService: DataHandlerService) { }

  resolve(): Observable<newsContent> {
    return new Observable<newsContent> (subscriber=> {
      if (this.newsData) {
        subscriber.next(this.newsData);
      } else {
        this.dataHandlerService.getDefaultPageData(NewsQuery, 'news', (res) => {
          return new NewsModel(res.data.news);
        }).subscribe((newsData: newsContent) => {
          this.newsData = newsData;
          subscriber.next(this.newsData);
        },() => subscriber.next(null));
      }
    });
  }
}
