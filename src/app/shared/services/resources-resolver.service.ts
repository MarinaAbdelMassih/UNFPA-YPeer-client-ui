import { Injectable } from '@angular/core';
import {resourcesContent, ResourcesModel} from '../models/resources.model';
import {DataHandlerService} from './data-handler.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {
  ResourcesPageQuery,
  ResourcesQuery,
  ResourcesTagsQuery,
  ResourcesYearsAndTagsQuery,
  ResourcesYearsQuery
} from '../queries/resources.query';
import {tag} from "../models/media.model";

@Injectable({
  providedIn: 'root'
})
export class ResourcesResolverService {

  private resourcesData : resourcesContent;
  selectedResourcesTag: BehaviorSubject<tag> = new BehaviorSubject<tag>(null);
  constructor(private dataHandlerService: DataHandlerService) { }

  resolve(): Observable<resourcesContent> {
    return new Observable<resourcesContent> (subscriber=> {
        this.dataHandlerService.getDefaultPageData(ResourcesQuery, 'resources', (res) => {
          return new ResourcesModel(res.data.resources);
        }).subscribe((resourcesData: resourcesContent) => {
          this.resourcesData = resourcesData;
          subscriber.next(this.resourcesData);
        },() => subscriber.next(null));
    });
  }

  getFilteredDataByTag(filter): Observable<resourcesContent> {
    let result;
    return new Observable<resourcesContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(ResourcesTagsQuery(filter), (res) => {
        result = res;
      }).then(() => {
        this.resourcesData = new ResourcesModel({title: 'Resources', resourcesListCollection: result.data.resourcesListItemCollection,
          resourcesTagsCollection: result.data.resourcesTagItemCollection});
        subscriber.next(this.resourcesData);
      },() => subscriber.next(null));
    });
  }

  getFilteredDataByYear(year): Observable<resourcesContent> {
    let result;
    return new Observable<resourcesContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(ResourcesYearsQuery(year), (res) => {
        result = res;
      }).then(() => {
        this.resourcesData = new ResourcesModel({title: 'Resources', resourcesListCollection: result.data.resourcesListItemCollection,
          resourcesTagsCollection: result.data.resourcesTagItemCollection});
        subscriber.next(this.resourcesData);
      },() => subscriber.next(null));
    });
  }

  getFilteredDataByYearAndTags(year, tag): Observable<resourcesContent> {
    let result;
    return new Observable<resourcesContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(ResourcesYearsAndTagsQuery(year, tag), (res) => {
        result = res;
      }).then(() => {
        this.resourcesData = new ResourcesModel({title: 'Resources', resourcesListCollection: result.data.resourcesListItemCollection,
          resourcesTagsCollection: result.data.resourcesTagItemCollection});
        subscriber.next(this.resourcesData);
      },() => subscriber.next(null));
    });
  }

  getPageData(skip: number, limit: number): Observable<resourcesContent> {
    let result;
    return new Observable<resourcesContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(ResourcesPageQuery(skip, limit), (res) => {
        result = res;
      }).then(() => {
        this.resourcesData = new ResourcesModel({title: 'Resources', resourcesListCollection: result.data.resourcesListItemCollection,
          resourcesTagsCollection: result.data.resourcesTagItemCollection});
        subscriber.next(this.resourcesData);
      },() => subscriber.next(null));
    });
  }
}
