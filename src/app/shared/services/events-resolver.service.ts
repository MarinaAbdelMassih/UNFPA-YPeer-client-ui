import { Injectable } from '@angular/core';
import {eventsContent, EventsModel , tag} from '../models/events.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {
  EventsDetailsQuery,
  EventsPageQuery,
  EventsQuery,
  EventsTagsQuery
} from '../queries/events.query';


@Injectable({
  providedIn: 'root'
})
export class EventsResolverService {

  private eventsData: eventsContent;
  selectedEventsTag: BehaviorSubject<tag> = new BehaviorSubject<tag>(null);

  constructor(private dataHandlerService: DataHandlerService) { }

  resolve(): Observable<eventsContent> {
    return new Observable<eventsContent> (subscriber=> {
        this.dataHandlerService.getDefaultPageData(EventsQuery, 'events', (res) => {
          return new EventsModel(res.data.events);
        }).subscribe((eventsData: eventsContent) => {
          this.eventsData = eventsData;
          subscriber.next(this.eventsData);
        },() => subscriber.next(null));
    });
  }

  getFilteredDataByTag(filter): Observable<eventsContent> {
    let result;
    return new Observable<eventsContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(EventsTagsQuery(filter), (res) => {
        result = res;
      }).then(() => {
        this.eventsData = new EventsModel({title: 'Events', eventsListCollection: result.data.eventsListItemCollection,
          eventsTagsCollection: result.data.eventsTagItemCollection});
        subscriber.next(this.eventsData);
      },() => subscriber.next(null));
    });
  }

  getPageData(skip: number, limit: number): Observable<eventsContent> {
    let result;
    return new Observable<eventsContent> (subscriber=> {
      this.dataHandlerService.getRemoteDataWithoutSave(EventsPageQuery(skip, limit), (res) => {
        result = res;
      }).then(() => {
        this.eventsData = new EventsModel({title: 'Events', eventsListCollection: result.data.eventsListItemCollection,
          eventsTagsCollection: result.data.eventsTagItemCollection});
        subscriber.next(this.eventsData);
      },() => subscriber.next(null));
    });
  }
  getPageDetails(id: number): Observable<eventsContent> {
    let result;
    return new Observable<eventsContent>(subscriber => {
      this.dataHandlerService.getRemoteDataWithoutSave(EventsDetailsQuery(id), (res) => {
        result = res;
      }).then(() => {
        this.eventsData = new EventsModel({
          title: 'Events', eventsListCollection: result.data.eventsListItemCollection,
          eventsTagsCollection: result.data.eventsTagItemCollection
        });
        subscriber.next(this.eventsData);
      }, () => subscriber.next(null));
    });
  }
}
