import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {newsContent} from '../../../../../../src/app/shared/models/news.model';
import {NewsResolverService} from '../../../../../../src/app/shared/services/news-resolver.service';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  newsData: newsContent;

  categoriesList: CategoryModel[] = [
    {title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [2018, 2019, 2020, 2021, 2022]},
  ];

  // detailsDataBanner = [{
  //   img: './assets/images/details-banner.png',
  //   title: {EN: 'Event Title (Long Long Title) Lorem Ipsum Dolor Sit Amet ', AR: ''},
  //   label: {EN: 'Events', AR: 'الاحداث'},
  // }
  // ];

  constructor(private newsResolverService: NewsResolverService) {
  }

  ngOnInit() {
    this.getNewsData();
  }

  getNewsData(): void {
    let newsSub = this.newsResolverService.resolve().subscribe((newsData: newsContent) => {
      this.newsData = undefined;
      setTimeout(() => {
        this.newsData = newsData;
      }, 200);

    });
    this.subscriptions.push(newsSub);
  }

}
