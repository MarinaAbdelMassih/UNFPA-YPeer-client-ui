import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {newsContent, newsDetailsItem, newsListItem, tag} from '../../../../../../src/app/shared/models/news.model';
import {NewsResolverService} from '../../../../../../src/app/shared/services/news-resolver.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  relatedNews: newsListItem[];

  categoriesList: CategoryModel[] = [
    {title: {EN: 'News', AR: 'الأخبار'}, count: 50, hideToggle: true, url: 'news'},
    {title: {EN: 'Events', AR: 'الأحداث'}, count: 23, hideToggle: true, url: 'events'},
    {title: {EN: 'Stories', AR: 'القصص'}, count: 18, hideToggle: true, url: 'stories'},
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
  latestNews: newsListItem[];
  index;
  newsDetailsData: newsDetailsItem;
  newsBasicData: newsListItem;

  constructor(private newsResolverService: NewsResolverService, public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getNewsDetailsData();
    this.getNewsData()
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
}