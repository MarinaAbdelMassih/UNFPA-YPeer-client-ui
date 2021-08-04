import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {ActivatedRoute} from '@angular/router';
import {eventsContent, eventsDetailsItem, eventsListItem, tag} from '../../../../../../src/app/shared/models/events.model';
import {EventsResolverService} from '../../../../../../src/app/shared/services/events-resolver.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  relatedEvents: eventsListItem[];

  categoriesList: CategoryModel[] = [
    {title: {EN: 'News', AR: 'الأخبار'}, count: 50, hideToggle: true},
    {title: {EN: 'Events', AR: 'الأحداث'}, count: 23, hideToggle: true},
    {title: {EN: 'Stories', AR: 'القصص'}, count: 18, hideToggle: true},
    {
      title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [
        {year: 2018, selected: false},
        {year: 2019, selected: false},
        {year: 2020, selected: false},
        {year: 2021, selected: false},
        {year: 2022, selected: false}
      ]
    },
  ];
  tagsList: tag[];
  latestEvents: eventsListItem[];
  eventPhotos = ['assets/images/events-details-photos.png', 'assets/images/events-details-photos.png', 'assets/images/events-details-photos.png', 'assets/images/events-details-photos.png'];
  index;
  eventsDetailsData: eventsDetailsItem;
  eventsBasicData: eventsListItem;

  constructor(private eventsResolverService: EventsResolverService, public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getEventsData();
    this.getEventsDetailsData();
  }

  getEventsData(): void {
    let eventsSub = this.eventsResolverService.resolve().subscribe((eventsData: eventsContent) => {
      this.tagsList = eventsData.tags;
      this.eventsBasicData = eventsData.eventsList.filter(item => item.id == this.index)[0];
      this.relatedEvents = eventsData.eventsList.filter(item => (item.tagLabel == this.eventsBasicData.tagLabel
        && item.id != this.index));

      eventsData.eventsList.map(item => item.eventDate = new Date(item.eventDate));
      this.latestEvents = eventsData.eventsList.sort((a,b) => (b.eventDate - a.eventDate));
    });
    this.subscriptions.push(eventsSub);
  }

  getEventsDetailsData(): void {
    let eventsSub = this.eventsResolverService.getPageDetails(this.index).subscribe((eventsData: eventsContent) => {
      this.eventsDetailsData = undefined;
      setTimeout(() => {
        this.eventsDetailsData = eventsData.eventsDetailsItem[0];
        console.log(this.eventsDetailsData);
      }, 200);
    });
    this.subscriptions.push(eventsSub);
  }
}
