import {Injectable} from '@angular/core';
import {courseCatalogContent, CourseCatalogModel} from '../models/course-catalog.model';
import {DataHandlerService} from './data-handler.service';
import {Observable} from 'rxjs';
import {CourseCatalogQuery} from '../queries/course-catalog.query';

@Injectable({
  providedIn: 'root'
})

export class CourseCatalogResolverService {

  private courseCatalogData: courseCatalogContent;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  resolve(): Observable<courseCatalogContent> {
    return new Observable<courseCatalogContent>(subscriber => {
      if (this.courseCatalogData) {
        subscriber.next(this.courseCatalogData);
      } else {
        this.dataHandlerService.getDefaultPageData(CourseCatalogQuery, 'courseCatalog', (res) => {
          return new CourseCatalogModel(res.data.courseCatalog);
        }).subscribe((courseCatalogData: courseCatalogContent) => {
          this.courseCatalogData = courseCatalogData;
          subscriber.next(this.courseCatalogData);
        },() => subscriber.next(null));
      }
    });
  }
}
