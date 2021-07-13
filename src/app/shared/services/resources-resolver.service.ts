import { Injectable } from '@angular/core';
import {resourcesContent, ResourcesModel} from '../models/resources.model';
import {DataHandlerService} from './data-handler.service';
import {Observable} from 'rxjs';
import {ResourcesQuery} from '../queries/resources.query';

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
}
