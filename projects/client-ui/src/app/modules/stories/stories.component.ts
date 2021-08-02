import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {storiesContent, storiesListItem} from '../../../../../../src/app/shared/models/stories.model';
import {StoriesResolverService} from '../../../../../../src/app/shared/services/stories-resolver.service';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-story',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StoriesComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  storiesData: storiesContent;
  storiesList: storiesListItem[] = [];
  showLoadMore: boolean =true;
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

  constructor(private storiesResolverService: StoriesResolverService) { }

  ngOnInit() {
    this.getStoriesData();
  }

  getStoriesData(): void {
    let storiesSub = this.storiesResolverService.getPageData(this.storiesList.length, 6).subscribe((storiesData: storiesContent) => {
      this.storiesData = undefined;
      setTimeout(() => {
        this.storiesData = storiesData;
        this.storiesList = this.storiesList.concat(storiesData.storiesList);
        this.showLoadMore = this.storiesList.length < this.storiesData.storiesListTotal;
      }, 200)

    });
    this.subscriptions.push(storiesSub);
  }

  filterByTag(tag) {
    this.storiesResolverService.selectedStoriesTag.next(tag);
    this.selectedTag = tag.label;
    if (this.selectedYear) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    }
    else {
      let storiesFilterSub = this.storiesResolverService.getFilteredDataByTag(tag.label).subscribe((storiesFilteredData: storiesContent) => {
        this.storiesData = undefined;
        setTimeout(() => {
          this.storiesData = storiesFilteredData;
          this.storiesList = storiesFilteredData.storiesList;
          this.showLoadMore = false;
          if(this.storiesResolverService.selectedStoriesTag.getValue()) {
            this.storiesData.tags.find(tag => tag.id == this.storiesResolverService.selectedStoriesTag.getValue().id).selected = true;
          }
        }, 200)
      });
      this.subscriptions.push(storiesFilterSub);
    }
  }

  filterByYear(year) {
    this.selectedYear = year.year;
    if (this.selectedTag) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    }
    else {
      let storiesFilterSub = this.storiesResolverService.getFilteredDataByYear(year.year).subscribe((storiesFilteredData: storiesContent) => {
        this.storiesData = undefined;
        setTimeout(() => {
          this.storiesData = storiesFilteredData;
          this.storiesList = storiesFilteredData.storiesList;
          this.showLoadMore = false;
        }, 200)

      });
      this.subscriptions.push(storiesFilterSub);
    }
  }

  filterByYearAndTag(year, tag) {
    let storiesFilterSub = this.storiesResolverService.getFilteredDataByYearAndTags(year, tag).subscribe((storiesFilteredData: storiesContent) => {
      this.storiesData = undefined;
      setTimeout(() => {
        this.storiesData = storiesFilteredData;
        this.storiesList = storiesFilteredData.storiesList;
        this.showLoadMore = false;
        if(this.storiesResolverService.selectedStoriesTag.getValue()) {
          this.storiesData.tags.find(tag => tag.id == this.storiesResolverService.selectedStoriesTag.getValue().id).selected = true;
        }
      }, 200)
    });
    this.subscriptions.push(storiesFilterSub);
  }

  clearData() {
    // @ts-ignore
    this.categoriesList[0].yearsList.map(year => year.selected = false);
    this.selectedYear = this.selectedTag = null;
    this.storiesList = [];
    this.getStoriesData();
  }

}
