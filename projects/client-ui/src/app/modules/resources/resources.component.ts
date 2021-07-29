import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ResourcesResolverService} from '../../../../../../src/app/shared/services/resources-resolver.service';
import {resourcesContent, resourcesListItem} from '../../../../../../src/app/shared/models/resources.model';
import {Subscription} from 'rxjs';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ResourcesComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  resourcesData: resourcesContent;
  resourcesList: resourcesListItem[] = [];
  showLoadMore: boolean =true;
  selectedTag: string;
  selectedYear: number;

  categoriesList: CategoryModel[] = [
    {title: {EN: 'Training Manuals', AR: 'دليل التدريب'}, count: 50, hideToggle: true, url: 'trainings'},
    {title: {EN: 'Publications', AR: 'المنشورات'}, count: 23, hideToggle: true, url: 'publications'},
    {title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [
        {year: 2018, selected: false},
        {year: 2019, selected: false},
        {year: 2020, selected: false},
        {year: 2021, selected: false},
        {year: 2022, selected: false}
      ]},
  ];

  constructor(private resourcesResolverService: ResourcesResolverService) {
  }

  ngOnInit() {
    this.getResourcesData();
  }

  getResourcesData(): void {
    let resourcesSub = this.resourcesResolverService.getPageData(this.resourcesList.length, 2).subscribe((resourcesData: resourcesContent) => {
      this.resourcesData = undefined;
      setTimeout(() => {
        this.resourcesData = resourcesData;
        this.resourcesList = this.resourcesList.concat(resourcesData.resourcesList);
        this.showLoadMore = this.resourcesList.length < this.resourcesData.resourcesListTotal;
      }, 200)

    });
    this.subscriptions.push(resourcesSub);
  }

  filterByTag(tag) {
    this.resourcesResolverService.selectedResourcesTag.next(tag);
    this.selectedTag = tag.label;
    if (this.selectedYear) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    }
    else {
      let resourcesFilterSub = this.resourcesResolverService.getFilteredDataByTag(tag.label).subscribe((resourcesFilteredData: resourcesContent) => {
        this.resourcesData = undefined;
        setTimeout(() => {
          this.resourcesData = resourcesFilteredData;
          this.resourcesList = resourcesFilteredData.resourcesList;
          this.showLoadMore = false;
          if(this.resourcesResolverService.selectedResourcesTag.getValue()) {
            this.resourcesData.tags.find(tag => tag.id == this.resourcesResolverService.selectedResourcesTag.getValue().id).selected = true;
          }
        }, 200)

      });
      this.subscriptions.push(resourcesFilterSub);
    }
  }

  filterByYear(year) {
    this.selectedYear = year.year;
    if (this.selectedTag) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    }
    else {
      let resourcesFilterSub = this.resourcesResolverService.getFilteredDataByYear(year.year).subscribe((resourcesFilteredData: resourcesContent) => {
        this.resourcesData = undefined;
        setTimeout(() => {
          this.resourcesData = resourcesFilteredData;
          this.resourcesList = resourcesFilteredData.resourcesList;
          this.showLoadMore = false;
        }, 200)
      });
      this.subscriptions.push(resourcesFilterSub);
    }
  }

  filterByYearAndTag(year, tag) {
    let resourcesFilterSub = this.resourcesResolverService.getFilteredDataByYearAndTags(year, tag).subscribe((resourcesFilteredData: resourcesContent) => {
      this.resourcesData = undefined;
      setTimeout(() => {
        this.resourcesData = resourcesFilteredData;
        this.resourcesList = resourcesFilteredData.resourcesList;
        this.showLoadMore = false;
        if(this.resourcesResolverService.selectedResourcesTag.getValue()) {
          this.resourcesData.tags.find(tag => tag.id == this.resourcesResolverService.selectedResourcesTag.getValue().id).selected = true;
        }
      }, 200)

    });
    this.subscriptions.push(resourcesFilterSub);
  }

  clearData() {
    // @ts-ignore
    this.categoriesList[2].yearsList.map(year => year.selected = false);
    this.selectedYear = this.selectedTag = null;
    this.resourcesList = [];
    this.getResourcesData();
  }

}
