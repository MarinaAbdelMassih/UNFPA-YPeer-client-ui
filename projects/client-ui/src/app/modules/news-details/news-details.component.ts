import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {newsContent, newsDetailsItem, newsListItem, tag} from '../../../../../../src/app/shared/models/news.model';
import {NewsResolverService} from '../../../../../../src/app/shared/services/news-resolver.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import {eventsContent} from '../../../../../../src/app/shared/models/events.model';
import {storiesContent} from '../../../../../../src/app/shared/models/stories.model';
import {EventsResolverService} from '../../../../../../src/app/shared/services/events-resolver.service';
import {StoriesResolverService} from '../../../../../../src/app/shared/services/stories-resolver.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  relatedNews: newsListItem[];
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
  latestNews: newsListItem[];
  index;
  newsDetailsData: newsDetailsItem;
  newsBasicData: newsListItem;

  constructor(private newsResolverService: NewsResolverService,
              private eventsResolverService: EventsResolverService,
              private storiesResolverService: StoriesResolverService,
              public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getNewsDetailsData();
    this.getNewsData();
    this.getCategoriesCount();
  }


  getNewsData(): void {
    let newsSub = this.newsResolverService.resolve().subscribe((newsData: newsContent) => {
      this.tagsList = newsData.tags;
      this.newsBasicData = newsData.newsList.filter(item => item.id == this.index)[0];
      this.relatedNews = newsData.newsList.filter(item => (item.tagLabel == this.newsBasicData.tagLabel
      && item.id != this.index));

      newsData.newsList.map(item => item.newsDate = new Date(item.newsDate));
      this.latestNews = newsData.newsList.sort((a,b) => (b.newsDate - a.newsDate));
    });
    this.subscriptions.push(newsSub);
  }

  getNewsDetailsData(): void {
    let newsSub = this.newsResolverService.getPageDetails(this.index).subscribe((newsData: newsContent) => {
      this.newsDetailsData = undefined;
      setTimeout(() => {
        this.newsDetailsData = newsData.newsDetailsItem[0];
      }, 200)

    });
    this.subscriptions.push(newsSub);
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
