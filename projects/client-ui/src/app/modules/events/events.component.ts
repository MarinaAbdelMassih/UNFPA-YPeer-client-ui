import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {eventsContent} from '../../../../../../src/app/shared/models/events.model';
import {EventsResolverService} from '../../../../../../src/app/shared/services/events-resolver.service';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  eventsData: eventsContent;

  categoriesList: CategoryModel[] = [
    {title: {EN: 'Previous Events', AR: 'الأحداث السابقه'}, count: 50, hideToggle: true},
    {title: {EN: 'Upcoming Events', AR: 'الأحداث القادمه'}, count: 23, hideToggle: true},
  ];

  constructor(private eventsResolverService: EventsResolverService) {
  }

  ngOnInit() {
    this.getEventsData();
  }

  getEventsData(): void {
    let eventsSub = this.eventsResolverService.resolve().subscribe((eventsData: eventsContent) => {
      this.eventsData = undefined;
      setTimeout(() => {
        this.eventsData = eventsData;
      }, 200)

    });
    this.subscriptions.push(eventsSub);
  }

}
