import {Injectable} from '@angular/core';
import {publicationsContent, PublicationsModel, tag} from '../models/publications.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {
  PublicationsDetailsQuery,
  PublicationsPageQuery,
  PublicationsQuery,
  PublicationsTagsQuery,
  PublicationsYearsAndTagsQuery,
  PublicationsYearsQuery
} from '../queries/publications.query';


@Injectable({
  providedIn: 'root'
})
export class PublicationsResolverService {

  private publicationsData: publicationsContent;
  selectedPublicationsTag: BehaviorSubject<tag> = new BehaviorSubject<tag>(null);

  constructor(private dataHandlerService: DataHandlerService) {
  }

  resolve(): Observable<publicationsContent> {
    return new Observable<publicationsContent>(subscriber => {
      if (this.publicationsData) {
        subscriber.next(this.publicationsData);
      } else {
        this.dataHandlerService.getDefaultPageData(PublicationsQuery, 'publications', (res) => {
          return new PublicationsModel(res.data.publications);
        }).subscribe((publicationsData: publicationsContent) => {
          this.publicationsData = publicationsData;
          subscriber.next(this.publicationsData);
        }, () => subscriber.next(null));
      }
    });
  }

  getFilteredDataByTag(filter): Observable<publicationsContent> {
    let result;
    return new Observable<publicationsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(PublicationsTagsQuery(filter), (res) => {
        result = res;
      }).then(() => {
        this.publicationsData = new PublicationsModel({
          title: 'publications', publicationsListCollection: result.data.publicationsListItemCollection,
          publicationsTagsCollection: result.data.publicationsTagItemCollection
        });
        subscriber.next(this.publicationsData);
      }, () => subscriber.next(null));
    });
  }

  getFilteredDataByYear(year): Observable<publicationsContent> {
    let result;
    return new Observable<publicationsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(PublicationsYearsQuery(year), (res) => {
        result = res;
      }).then(() => {
        this.publicationsData = new PublicationsModel({
          title: 'publications', publicationsListCollection: result.data.publicationsListItemCollection,
          publicationsTagsCollection: result.data.publicationsTagItemCollection
        });
        subscriber.next(this.publicationsData);
      }, () => subscriber.next(null));
    });
  }

  getFilteredDataByYearAndTags(year, tag): Observable<publicationsContent> {
    let result;
    return new Observable<publicationsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(PublicationsYearsAndTagsQuery(year, tag), (res) => {
        result = res;
      }).then(() => {
        this.publicationsData = new PublicationsModel({
          title: 'publications', publicationsListCollection: result.data.publicationsListItemCollection,
          publicationsTagsCollection: result.data.publicationsTagItemCollection
        });
        subscriber.next(this.publicationsData);
      }, () => subscriber.next(null));
    });
  }

  getPageData(skip: number, limit: number): Observable<publicationsContent> {
    let result;
    return new Observable<publicationsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(PublicationsPageQuery(skip, limit), (res) => {
        result = res;
      }).then(() => {
        this.publicationsData = new PublicationsModel({
          title: 'publications', publicationsListCollection: result.data.publicationsListItemCollection,
          publicationsTagsCollection: result.data.publicationsTagItemCollection
        });
        subscriber.next(this.publicationsData);
      }, () => subscriber.next(null));
    });
  }
  getPageDetails(id: number): Observable<publicationsContent> {
    let result;
    return new Observable<publicationsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(PublicationsDetailsQuery(id), (res) => {
        result = res;
      }).then(() => {
        this.publicationsData = new PublicationsModel({
          title: 'Publications', publicationsListCollection: result.data.publicationsListItemCollection,
          publicationsTagsCollection: result.data.publicationsTagItemCollection
        });
        subscriber.next(this.publicationsData);
      }, () => subscriber.next(null));
    });
  }
}
