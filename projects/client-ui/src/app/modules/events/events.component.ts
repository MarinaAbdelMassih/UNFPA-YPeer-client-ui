import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {eventsContent, eventsListItem} from '../../../../../../src/app/shared/models/events.model';
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
  eventsList: eventsListItem[] = [];
  showLoadMore: boolean =true;
  selectedTag: string;
  upcomingEvents: eventsListItem[] = [];
  previousEvents: eventsListItem[] = [];

  categoriesList: CategoryModel[] = [
    {title: {EN: 'Previous Events', AR: 'الأحداث السابقه'}, count: 0, hideToggle: true, label: 'previous', selected: false},
    {title: {EN: 'Upcoming Events', AR: 'الأحداث القادمه'}, count: 0, hideToggle: true, label: 'upcoming', selected: false},
  ];

  constructor(private eventsResolverService: EventsResolverService) {
  }

  ngOnInit() {
    this.getUpcomingAndPreviousEvents();
    this.getEventsData();
  }

  getEventsData(): void {
    let eventsSub = this.eventsResolverService.getPageData(this.eventsList.length, 6).subscribe((eventsData: eventsContent) => {
      this.eventsData = undefined;
      setTimeout(() => {
        this.eventsData = eventsData;
        this.eventsList = this.eventsList.concat(eventsData.eventsList);
        this.showLoadMore = this.eventsList.length < this.eventsData.eventsListTotal;
      }, 200)

    });
    this.subscriptions.push(eventsSub);
  }

  filterByTag(tag) {
    this.eventsResolverService.selectedEventsTag.next(tag);
    this.selectedTag = tag.label;

    let eventsFilterSub = this.eventsResolverService.getFilteredDataByTag(tag.label).subscribe((eventsFilteredData: eventsContent) => {
      this.eventsData = undefined;
      setTimeout(() => {
        this.eventsData = eventsFilteredData;
        this.eventsList = eventsFilteredData.eventsList;
        this.showLoadMore = false;
        if(this.eventsResolverService.selectedEventsTag.getValue()) {
          this.eventsData.tags.find(tag => tag.id == this.eventsResolverService.selectedEventsTag.getValue().id).selected = true;
        }
        this.categoriesList.map(category => category.selected = false);
      }, 200)

    });
    this.subscriptions.push(eventsFilterSub);
  }

  clearData() {
    this.selectedTag = null;
    this.eventsList = [];
    this.categoriesList.map(category => category.selected = false);
    this.getEventsData();
  }

  getUpcomingAndPreviousEvents() {
    let eventsSub = this.eventsResolverService.resolve().subscribe((eventsData: eventsContent) => {
      this.eventsData = undefined;
      setTimeout(() => {
        eventsData.eventsList.map(item => item.eventDate = new Date(item.eventDate));
        let currentDate = new Date();
        eventsData.eventsList.map((item) => (item.eventDate >= currentDate ? this.upcomingEvents.push(item)
          : this.previousEvents.push(item)));
        this.categoriesList[0].count = this.previousEvents.length;
        this.categoriesList[1].count = this.upcomingEvents.length;
      }, 200)

    });
    this.subscriptions.push(eventsSub);
  }

  getSelectedEventsList(event) {
    if(event.label == 'upcoming') {
      this.eventsList = this.upcomingEvents;
      this.categoriesList[0].selected = false;
      this.categoriesList[1].selected = true;
    }
    else if (event.label == 'previous') {
      this.eventsList = this.previousEvents;
      this.categoriesList[0].selected = true;
      this.categoriesList[1].selected = false;
    }

    this.showLoadMore = false;
    this.eventsData.tags.map(tag => tag.selected = false);
    this.selectedTag = null;
  }

}
