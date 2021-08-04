import {Injectable} from '@angular/core';
import {newsContent, NewsModel, tag} from '../models/news.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {
  NewsDetailsQuery,
  NewsPageQuery,
  NewsQuery,
  NewsTagsQuery,
  NewsYearsAndTagsQuery,
  NewsYearsQuery
} from '../queries/news.query';

@Injectable({
  providedIn: 'root'
})
export class NewsResolverService {

  private newsData: newsContent;
  selectedNewsTag: BehaviorSubject<tag> = new BehaviorSubject<tag>(null);

  constructor(private dataHandlerService: DataHandlerService) {
  }

  resolve(): Observable<newsContent> {
    return new Observable<newsContent>(subscriber => {
        this.dataHandlerService.getDefaultPageData(NewsQuery, 'news', (res) => {
          return new NewsModel(res.data.news);
        }).subscribe((newsData: newsContent) => {
          this.newsData = newsData;
          subscriber.next(this.newsData);
        }, () => subscriber.next(null));
    });
  }

  getFilteredDataByTag(filter): Observable<newsContent> {
    let result;
    return new Observable<newsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(NewsTagsQuery(filter), (res) => {
        result = res;
      }).then(() => {
        this.newsData = new NewsModel({
          title: 'News', newsListCollection: result.data.newsListItemCollection,
          newsTagsCollection: result.data.newsTagItemCollection
        });
        subscriber.next(this.newsData);
      }, () => subscriber.next(null));
    });
  }

  getFilteredDataByYear(year): Observable<newsContent> {
    let result;
    return new Observable<newsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(NewsYearsQuery(year), (res) => {
        result = res;
      }).then(() => {
        this.newsData = new NewsModel({
          title: 'News', newsListCollection: result.data.newsListItemCollection,
          newsTagsCollection: result.data.newsTagItemCollection
        });
        subscriber.next(this.newsData);
      }, () => subscriber.next(null));
    });
  }

  getFilteredDataByYearAndTags(year, tag): Observable<newsContent> {
    let result;
    return new Observable<newsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(NewsYearsAndTagsQuery(year, tag), (res) => {
        result = res;
      }).then(() => {
        this.newsData = new NewsModel({
          title: 'News', newsListCollection: result.data.newsListItemCollection,
          newsTagsCollection: result.data.newsTagItemCollection
        });
        subscriber.next(this.newsData);
      }, () => subscriber.next(null));
    });
  }

  getPageData(skip: number, limit: number): Observable<newsContent> {
    let result;
    return new Observable<newsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(NewsPageQuery(skip, limit), (res) => {
        result = res;
      }).then(() => {
        this.newsData = new NewsModel({
          title: 'News', newsListCollection: result.data.newsListItemCollection,
          newsTagsCollection: result.data.newsTagItemCollection
        });
        subscriber.next(this.newsData);
      }, () => subscriber.next(null));
    });
  }

  getPageDetails(id: number): Observable<newsContent> {
    let result;
    return new Observable<newsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(NewsDetailsQuery(id), (res) => {
        result = res;
      }).then(() => {
        this.newsData = new NewsModel({
          title: 'News', newsListCollection: result.data.newsListItemCollection,
          newsTagsCollection: result.data.newsTagItemCollection
        });
        subscriber.next(this.newsData);
      }, () => subscriber.next(null));
    });
  }
}
