import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {newsContent} from '../../../../../../src/app/shared/models/news.model';
import {NewsResolverService} from '../../../../../../src/app/shared/services/news-resolver.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  newsData: newsContent;

  categoriesList = [
    {title: 'Year', hideToggle: false, yearsList: [2018, 2019, 2020,2021,2022]},
  ];

  constructor(private newsResolverService: NewsResolverService) { }

  ngOnInit() {
    this.getNewsData();
  }

  getNewsData(): void {
    let newsSub = this.newsResolverService.resolve().subscribe((newsData: newsContent) => {
      this.newsData = undefined;
      setTimeout(() => {
        this.newsData = newsData;
      }, 200)

    });
    this.subscriptions.push(newsSub);
  }

}
