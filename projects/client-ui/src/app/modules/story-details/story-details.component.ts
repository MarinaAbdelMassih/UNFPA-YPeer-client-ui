import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {ActivatedRoute} from '@angular/router';
import {
  storiesContent,
  storiesDetailsItem,
  storiesListItem,
  tag
} from '../../../../../../src/app/shared/models/stories.model';
import {StoriesResolverService} from '../../../../../../src/app/shared/services/stories-resolver.service';
import {Subscription} from "rxjs";
import {EventsResolverService} from '../../../../../../src/app/shared/services/events-resolver.service';
import {NewsResolverService} from '../../../../../../src/app/shared/services/news-resolver.service';
import {newsContent} from '../../../../../../src/app/shared/models/news.model';
import {eventsContent} from '../../../../../../src/app/shared/models/events.model';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  relatedStories: storiesListItem[];
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
  latestStories: storiesListItem[];
  index;
  storiesDetailsData: storiesDetailsItem;
  storiesBasicData: storiesListItem;

  constructor(private storiesResolverService: StoriesResolverService,
              private eventsResolverService: EventsResolverService,
              private newsResolverService: NewsResolverService,
              public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getStoriesData();
    this.getStoriesDetailsData();
    this.getCategoriesCount();
  }

  getStoriesData(): void {
    let storiesSub = this.storiesResolverService.resolve().subscribe((storiesData: storiesContent) => {
      this.tagsList = storiesData.tags;
      this.relatedStories = storiesData.storiesList.filter(item => item.id != this.index);
      this.storiesBasicData = storiesData.storiesList.filter(item => item.id == this.index)[0];
      this.relatedStories = storiesData.storiesList.filter(item => (item.tagLabel == this.storiesBasicData.tagLabel
        && item.id != this.index));

      storiesData.storiesList.map(item => item.storyDate = new Date(item.storyDate));
      this.latestStories = storiesData.storiesList.sort((a,b) => (b.storyDate - a.storyDate));
    });
    this.subscriptions.push(storiesSub);
  }

  getStoriesDetailsData(): void {
    let storiesSub = this.storiesResolverService.getPageDetails(this.index).subscribe((storiesData: storiesContent) => {
      this.storiesDetailsData = undefined;
      setTimeout(() => {
        this.storiesDetailsData = storiesData.storiesDetailsItem[0];
      }, 200)

    });
    this.subscriptions.push(storiesSub);
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

