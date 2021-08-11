import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {ActivatedRoute} from '@angular/router';
import {eventsContent, eventsDetailsItem, eventsListItem, tag} from '../../../../../../src/app/shared/models/events.model';
import {EventsResolverService} from '../../../../../../src/app/shared/services/events-resolver.service';
import {Subscription} from 'rxjs';
import {NewsResolverService} from '../../../../../../src/app/shared/services/news-resolver.service';
import {StoriesResolverService} from '../../../../../../src/app/shared/services/stories-resolver.service';
import {newsContent} from '../../../../../../src/app/shared/models/news.model';
import {storiesContent} from '../../../../../../src/app/shared/models/stories.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  relatedEvents: eventsListItem[];
  newsCount: number;
  eventsCount: number;
  storiesCount: number;
  categoriesList: CategoryModel[] = [
    {title: {EN: 'News', AR: 'الأخبار'}, count: this.newsCount, hideToggle: true, url: 'news'},
    {title: {EN: 'Events', AR: 'الأحداث'}, count: this.eventsCount, hideToggle: true, url: 'events'},
    {title: {EN: 'Stories', AR: 'القصص'}, count: this.storiesCount, hideToggle: true, url: 'stories'},
    // {
    //   title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [
    //     {year: 2018, selected: false},
    //     {year: 2019, selected: false},
    //     {year: 2020, selected: false},
    //     {year: 2021, selected: false},
    //     {year: 2022, selected: false}
    //   ]
    // },
  ];
  tagsList: tag[];
  latestEvents: eventsListItem[];
  eventPhotos: eventsDetailsItem;
  // eventPhotos = ['assets/images/events-details-photos.png', 'assets/images/events-details-photos.png', 'assets/images/events-details-photos.png', 'assets/images/events-details-photos.png'];
  index;
  eventsDetailsData: eventsDetailsItem;
  eventsBasicData: eventsListItem;

  constructor(private eventsResolverService: EventsResolverService,
              private newsResolverService: NewsResolverService,
              private storiesResolverService: StoriesResolverService,
              public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getEventsData();
    this.getEventsDetailsData();
    this.getCategoriesCount();
  }

  getEventsData(): void {
    let eventsSub = this.eventsResolverService.resolve().subscribe((eventsData: eventsContent) => {
      this.tagsList = eventsData.tags;
      this.eventsBasicData = eventsData.eventsList.filter(item => item.id == this.index)[0];
      this.relatedEvents = eventsData.eventsList.filter(item => (item.tagLabel == this.eventsBasicData.tagLabel
        && item.id != this.index));

      eventsData.eventsList.map(item => item.eventDate = new Date(item.eventDate));
      this.latestEvents = eventsData.eventsList.sort((a, b) => (b.eventDate - a.eventDate));
    });
    this.subscriptions.push(eventsSub);
  }

  getEventsDetailsData(): void {
    let eventsSub = this.eventsResolverService.getPageDetails(this.index).subscribe((eventsData: eventsContent) => {
      this.eventsDetailsData = undefined;
      setTimeout(() => {
        this.eventsDetailsData = eventsData.eventsDetailsItem[0];
      }, 200);
    });
    this.subscriptions.push(eventsSub);
  }

  getCategoriesCount(): void {
    // news count
    this.newsResolverService.getPageData(0, 0).subscribe((newsData: newsContent) => {
      setTimeout(() => {
        this.newsCount = newsData.newsListTotal;
        this.categoriesList.find(item => item.url == 'news').count = this.newsCount;
      }, 200)
    });
    // events count
    this.eventsResolverService.getPageData(0, 0).subscribe((eventsData: eventsContent) => {
      setTimeout(() => {
        this.eventsCount = eventsData.eventsListTotal;
        this.categoriesList.find(item => item.url == 'events').count = this.eventsCount;
      }, 200)
    });
    // stories count
    this.storiesResolverService.getPageData(0, 0).subscribe((storiesData: storiesContent) => {
      setTimeout(() => {
        this.storiesCount = storiesData.storiesListTotal;
        this.categoriesList.find(item => item.url == 'stories').count = this.storiesCount;
      }, 200)
    });
  }

}
