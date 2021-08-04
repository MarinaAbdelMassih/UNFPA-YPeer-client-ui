import { Injectable } from '@angular/core';
import {storiesContent, StoriesModel} from '../models/stories.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {
  StoriesDetailsQuery,
  StoriesPageQuery,
  StoriesQuery,
  StoriesTagsQuery,
  StoriesYearsAndTagsQuery,
  StoriesYearsQuery
} from '../queries/stories.query';
import {tag} from "../models/media.model";

@Injectable({
  providedIn: 'root'
})
export class StoriesResolverService {

  private storiesData: storiesContent;
  selectedStoriesTag: BehaviorSubject<tag> = new BehaviorSubject<tag>(null);

  constructor(private dataHandlerService: DataHandlerService) { }

  resolve(): Observable<storiesContent> {
    return new Observable<storiesContent> (subscriber=> {
        this.dataHandlerService.getDefaultPageData(StoriesQuery, 'stories', (res) => {
          return new StoriesModel(res.data.stories);
        }).subscribe((storiesData: storiesContent) => {
          this.storiesData = storiesData;
          subscriber.next(this.storiesData);
        },() => subscriber.next(null));
    });
  }

  getFilteredDataByTag(filter): Observable<storiesContent> {
    let result;
    return new Observable<storiesContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(StoriesTagsQuery(filter), (res) => {
        result = res;
      }).then(() => {
        this.storiesData = new StoriesModel({title: 'Stories', storiesListCollection: result.data.storiesListItemCollection,
          storiesTagsCollection: result.data.storiesTagItemCollection});
        subscriber.next(this.storiesData);
      },() => subscriber.next(null));
    });
  }

  getFilteredDataByYear(year): Observable<storiesContent> {
    let result;
    return new Observable<storiesContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(StoriesYearsQuery(year), (res) => {
        result = res;
      }).then(() => {
        this.storiesData = new StoriesModel({title: 'Stories', storiesListCollection: result.data.storiesListItemCollection,
          storiesTagsCollection: result.data.storiesTagItemCollection});
        subscriber.next(this.storiesData);
      },() => subscriber.next(null));
    });
  }

  getFilteredDataByYearAndTags(year, tag): Observable<storiesContent> {
    let result;
    return new Observable<storiesContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(StoriesYearsAndTagsQuery(year, tag), (res) => {
        result = res;
      }).then(() => {
        this.storiesData = new StoriesModel({title: 'Stories', storiesListCollection: result.data.storiesListItemCollection,
          storiesTagsCollection: result.data.storiesTagItemCollection});
        subscriber.next(this.storiesData);
      },() => subscriber.next(null));
    });
  }

  getPageData(skip: number, limit: number): Observable<storiesContent> {
    let result;
    return new Observable<storiesContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(StoriesPageQuery(skip, limit), (res) => {
        result = res;
      }).then(() => {
        this.storiesData = new StoriesModel({title: 'Stories', storiesListCollection: result.data.storiesListItemCollection,
          storiesTagsCollection: result.data.storiesTagItemCollection});
        subscriber.next(this.storiesData);
      },() => subscriber.next(null));
    });
  }

  getPageDetails(id: number): Observable<storiesContent> {
    let result;
    return new Observable<storiesContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(StoriesDetailsQuery(id), (res) => {
        result = res;
      }).then(() => {
        this.storiesData = new StoriesModel({
          title: 'Stories', storiesListCollection: result.data.storiesListItemCollection,
          storiesTagsCollection: result.data.storiesTagItemCollection
        });
        subscriber.next(this.storiesData);
      }, () => subscriber.next(null));
    });
  }
}
