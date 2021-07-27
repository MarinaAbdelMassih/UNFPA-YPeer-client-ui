import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {newsContent, newsListItem} from '../../../../../../src/app/shared/models/news.model';
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
  newsList: newsListItem[] = [];
  showLoadMore = true;
  selectedTag: string;
  selectedYear: number;

  categoriesList: CategoryModel[] = [
    {title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [
        {year: 2018, selected: false},
        {year: 2019, selected: false},
        {year: 2020, selected: false},
        {year: 2021, selected: false},
        {year: 2022, selected: false}
      ]},
  ];

  constructor(private newsResolverService: NewsResolverService) { }

  ngOnInit() {
    this.getNewsData();
  }

  getNewsData(): void {
    let newsSub = this.newsResolverService.getPageData(this.newsList.length, 2).subscribe((newsData: newsContent) => {
      this.newsData = undefined;
      setTimeout(() => {
        this.newsData = newsData;
        this.newsList = this.newsList.concat(newsData.newsList);
        this.showLoadMore = this.newsList.length < this.newsData.newsListTotal;
      }, 200)

    });
    this.subscriptions.push(newsSub);
  }

  filterByTag(tag) {
    this.newsResolverService.selectedNewsTag.next(tag);
    this.selectedTag = tag.label;
    if (this.selectedYear) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    }
    else {
      let newsFilterSub = this.newsResolverService.getFilteredDataByTag(tag.label).subscribe((newsFilteredData: newsContent) => {
        this.newsData = undefined;
        setTimeout(() => {
          this.newsData = newsFilteredData;
          this.newsList = newsFilteredData.newsList;
          this.showLoadMore = false;
          if(this.newsResolverService.selectedNewsTag.getValue()) {
            this.newsData.tags.find(tag => tag.id == this.newsResolverService.selectedNewsTag.getValue().id).selected = true;
          }
        }, 200)

      });
      this.subscriptions.push(newsFilterSub);
    }
  }

  filterByYear(year) {
    this.selectedYear = year.year;
    if (this.selectedTag) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    }
    else {
      let newsFilterSub = this.newsResolverService.getFilteredDataByYear(year.year).subscribe((newsFilteredData: newsContent) => {
        this.newsData = undefined;
        setTimeout(() => {
          this.newsData = newsFilteredData;
          this.newsList = newsFilteredData.newsList;
          this.showLoadMore = false;
        }, 200)

      });
      this.subscriptions.push(newsFilterSub);
    }
  }

  filterByYearAndTag(year, tag) {
    let newsFilterSub = this.newsResolverService.getFilteredDataByYearAndTags(year, tag).subscribe((newsFilteredData: newsContent) => {
      this.newsData = undefined;
      setTimeout(() => {
        this.newsData = newsFilteredData;
        this.newsList = newsFilteredData.newsList;
        this.showLoadMore = false;
        if(this.newsResolverService.selectedNewsTag.getValue()) {
          this.newsData.tags.find(tag => tag.id == this.newsResolverService.selectedNewsTag.getValue().id).selected = true;
        }
      }, 200)

    });
    this.subscriptions.push(newsFilterSub);
  }

  clearData() {
    // @ts-ignore
    this.categoriesList[0].yearsList.map(year => year.selected = false);
    this.selectedYear = this.selectedTag = null;
    this.newsList = [];
    this.getNewsData();
  }

}
