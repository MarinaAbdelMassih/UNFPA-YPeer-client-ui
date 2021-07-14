import { Injectable } from '@angular/core';
import {mediaContent, MediaModel} from '../models/media.model';
import {Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {MediaPageQuery, MediaQuery, MediaTagsQuery} from '../queries/media.query';

@Injectable({
  providedIn: 'root'
})
export class MediaResolverService {

  private mediaData: mediaContent;

  constructor(private dataHandlerService: DataHandlerService) { }

  resolve(): Observable<mediaContent> {
    return new Observable<mediaContent> (subscriber=> {
      if (this.mediaData) {
        subscriber.next(this.mediaData);
      } else {
        this.dataHandlerService.getDefaultPageData(MediaQuery, 'media', (res) => {
          return new MediaModel(res.data.media);
        }).subscribe((mediaData: mediaContent) => {
          this.mediaData = mediaData;
          subscriber.next(this.mediaData);
        },() => subscriber.next(null));
      }
    });
  }

  getFilteredData(tagLabel): Observable<mediaContent> {
    let result;
    return new Observable<mediaContent> (subscriber=> {
        this.dataHandlerService.getRemoteDataWithoutSave(MediaTagsQuery(tagLabel), (res) => {
           result = res;
        }).then(() => {
          this.mediaData = new MediaModel({title: 'Media', mediaListCollection: result.data.mediaListCollection,
            mediaTagsCollection: result.data.mediaTagsCollection});
          subscriber.next(this.mediaData);
        },() => subscriber.next(null));
    });
  }

  getPageData(skip: number, limit: number): Observable<mediaContent> {
    let result;
    return new Observable<mediaContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(MediaPageQuery(skip, limit), (res) => {
        result = res;
      }).then(() => {
        this.mediaData = new MediaModel({title: 'Media', mediaListCollection: result.data.mediaListCollection,
          mediaTagsCollection: result.data.mediaTagsCollection});
        subscriber.next(this.mediaData);
      },() => subscriber.next(null));
    });
  }
}
