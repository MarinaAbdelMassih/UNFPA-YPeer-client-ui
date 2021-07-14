import { Injectable } from '@angular/core';
import {storiesContent, StoriesModel} from '../models/stories.model';
import {Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {StoriesQuery} from '../queries/stories.query';

@Injectable({
  providedIn: 'root'
})
export class StoriesResolverService {

  private storiesData: storiesContent;
  constructor(private dataHandlerService: DataHandlerService) { }

  resolve(): Observable<storiesContent> {
    return new Observable<storiesContent> (subscriber=> {
      if (this.storiesData) {
        subscriber.next(this.storiesData);
      } else {
        this.dataHandlerService.getDefaultPageData(StoriesQuery, 'stories', (res) => {
          return new StoriesModel(res.data.stories);
        }).subscribe((storiesData: storiesContent) => {
          this.storiesData = storiesData;
          subscriber.next(this.storiesData);
        },() => subscriber.next(null));
      }
    });
  }
}
