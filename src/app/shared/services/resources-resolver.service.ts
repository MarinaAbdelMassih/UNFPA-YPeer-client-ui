import { Injectable } from '@angular/core';
import {resourcesContent, ResourcesModel} from '../models/resources.model';
import {DataHandlerService} from './data-handler.service';
import {Observable} from 'rxjs';
import {ResourcesQuery} from '../queries/resources.query';
import {MediaPageQuery} from '../queries/media.query';

@Injectable({
  providedIn: 'root'
})
export class ResourcesResolverService {

  private resourcesData : resourcesContent
  constructor(private dataHandlerService: DataHandlerService) { }

  resolve(): Observable<resourcesContent> {
    return new Observable<resourcesContent> (subscriber=> {
      if (this.resourcesData) {
        subscriber.next(this.resourcesData);
      } else {
        this.dataHandlerService.getDefaultPageData(ResourcesQuery, 'resources', (res) => {
          return new ResourcesModel(res.data.resources);
        }).subscribe((resourcesData: resourcesContent) => {
          this.resourcesData = resourcesData;
          subscriber.next(this.resourcesData);
        },() => subscriber.next(null));
      }
    });
  }

  getPageData(skip: number, limit: number): Observable<resourcesContent> {
    let result;
    return new Observable<resourcesContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(MediaPageQuery(skip, limit), (res) => {
        result = res;
      }).then(() => {
        this.resourcesData = new ResourcesModel({title: 'resource', resourcesListCollection: result.data.resourcesListCollection,
          mediaTagsCollection: result.data.mediaTagsCollection});
        subscriber.next(this.resourcesData);
      },() => subscriber.next(null));
    });
  }
}
