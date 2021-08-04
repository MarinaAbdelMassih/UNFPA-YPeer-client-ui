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
      }, 200)

    });
    this.subscriptions.push(eventsFilterSub);
  }

  clearData() {
    this.selectedTag = null;
    this.eventsList = [];
    this.getEventsData();
  }

}
