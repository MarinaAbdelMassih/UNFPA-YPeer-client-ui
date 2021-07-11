import { Injectable } from '@angular/core';
import {mediaContent, MediaModel} from '../models/media.model';
import {Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {MediaQuery} from '../queries/media.query';

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
}
