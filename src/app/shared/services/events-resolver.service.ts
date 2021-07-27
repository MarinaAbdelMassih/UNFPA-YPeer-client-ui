import {Injectable} from '@angular/core';
import {eventsContent, EventsModel} from '../models/events.model';
import {Observable} from 'rxjs';
import {DataHandlerService} from './data-handler.service';
import {EventsQuery} from '../queries/events.query';

@Injectable({
  providedIn: 'root'
})
export class EventsResolverService {

  private eventsData: eventsContent;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  resolve(): Observable<eventsContent> {
    return new Observable<eventsContent>(subscriber => {
      if (this.eventsData) {
        subscriber.next(this.eventsData);
      } else {
        this.dataHandlerService.getDefaultPageData(EventsQuery, 'events', (res) => {
          return new EventsModel(res.data.events);
        }).subscribe((eventsData: eventsContent) => {
          this.eventsData = eventsData;
          subscriber.next(this.eventsData);
        }, () => subscriber.next(null));
      }
    });
  }
}
