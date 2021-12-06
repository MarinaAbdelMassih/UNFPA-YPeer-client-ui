import {Component, Input, OnInit} from '@angular/core';
import {latestCardItem} from "../../../../../../../../src/app/shared/models/home.model";
import {
  newsContent,
  newsDetailsItem,
  newsListItem,
  tag
} from "../../../../../../../../src/app/shared/models/news.model";
import {CategoryModel} from "../../../../../../../../src/app/shared/models/category.model";
import {NewsResolverService} from "../../../../../../../../src/app/shared/services/news-resolver.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  // @Input() latestSections: latestCardItem[];
  relatedNews: any;
  newsCount: number;
  eventsCount: number;
  storiesCount: number;
  categoriesList: CategoryModel[] = [
    {title: {EN: 'News', AR: 'الأخبار'}, count: this.newsCount, hideToggle: true, url: 'news'},
    {title: {EN: 'Events', AR: 'الأحداث'}, count: this.eventsCount, hideToggle: true, url: 'events'},
    {title: {EN: 'Stories', AR: 'القصص'}, count: this.storiesCount, hideToggle: true, url: 'stories'},
  ];
  latestNews: newsListItem[];
  index;
  newsBasicData: newsListItem;
  private subscriptions: Subscription[] = [];


  constructor(private newsResolverService: NewsResolverService) {
  }

  ngOnInit() {
    this.getNewsData();
  }

  getNewsData(): void {
    let newsSub = this.newsResolverService.resolve().subscribe((newsData: newsContent) => {
      this.newsBasicData = newsData.newsList.filter(item => item.id == this.index)[0];
      this.relatedNews = newsData.newsList;
      newsData.newsList.map(item => item.newsDate = new Date(item.newsDate));
      this.latestNews = newsData.newsList.sort((a, b) => (b.newsDate - a.newsDate));
    });
    this.subscriptions.push(newsSub);
  }

}


