import {Injectable} from '@angular/core';
import {trainingsContent, tag, TrainingsModel} from '../models/trainings.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {
  TrainingsPageQuery,
  TrainingsQuery,
  TrainingsTagsQuery,
  TrainingsYearsAndTagsQuery,
  TrainingsYearsQuery
} from '../queries/trainings.query';

@Injectable({
  providedIn: 'root'
})
export class trainingsResolverService {

  private trainingsData: trainingsContent;
  selectedTrainingsTag: BehaviorSubject<tag> = new BehaviorSubject<tag>(null);

  constructor(private dataHandlerService: DataHandlerService) {
  }

  resolve(): Observable<trainingsContent> {
    return new Observable<trainingsContent>(subscriber => {
      if (this.trainingsData) {
        subscriber.next(this.trainingsData);
      } else {
        this.dataHandlerService.getDefaultPageData(TrainingsQuery, 'trainings', (res) => {
          return new TrainingsModel(res.data.trainings);
        }).subscribe((trainingsData: trainingsContent) => {
          this.trainingsData = trainingsData;
          subscriber.next(this.trainingsData);
        }, () => subscriber.next(null));
      }
    });
  }

  getFilteredDataByTag(filter): Observable<trainingsContent> {
    let result;
    return new Observable<trainingsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(TrainingsTagsQuery(filter), (res) => {
        result = res;
      }).then(() => {
        this.trainingsData = new TrainingsModel({
          title: 'trainings', trainingsListCollection: result.data.trainingsListItemCollection,
          trainingsTagsCollection: result.data.trainingsTagItemCollection
        });
        subscriber.next(this.trainingsData);
      }, () => subscriber.next(null));
    });
  }

  getFilteredDataByYear(year): Observable<trainingsContent> {
    let result;
    return new Observable<trainingsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(TrainingsYearsQuery(year), (res) => {
        result = res;
      }).then(() => {
        this.trainingsData = new TrainingsModel({
          title: 'trainings', trainingsListCollection: result.data.trainingsListItemCollection,
          trainingsTagsCollection: result.data.trainingsTagItemCollection
        });
        subscriber.next(this.trainingsData);
      }, () => subscriber.next(null));
    });
  }

  getFilteredDataByYearAndTags(year, tag): Observable<trainingsContent> {
    let result;
    return new Observable<trainingsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(TrainingsYearsAndTagsQuery(year, tag), (res) => {
        result = res;
      }).then(() => {
        this.trainingsData = new TrainingsModel({
          title: 'trainings', trainingsListCollection: result.data.trainingsListItemCollection,
          trainingsTagsCollection: result.data.trainingsTagItemCollection
        });
        subscriber.next(this.trainingsData);
      }, () => subscriber.next(null));
    });
  }

  getPageData(skip: number, limit: number): Observable<trainingsContent> {
    let result;
    return new Observable<trainingsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(TrainingsPageQuery(skip, limit), (res) => {
        result = res;
      }).then(() => {
        this.trainingsData = new TrainingsModel({
          title: 'trainings', trainingsListCollection: result.data.trainingsListItemCollection,
          trainingsTagsCollection: result.data.trainingsTagItemCollection
        });
        subscriber.next(this.trainingsData);
      }, () => subscriber.next(null));
    });
  }
}
