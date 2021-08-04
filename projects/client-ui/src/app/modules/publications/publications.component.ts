import { Component, OnInit } from '@angular/core';
import {CategoryModel} from "../../../../../../src/app/shared/models/category.model";
import {publicationsContent, publicationsListItem} from "../../../../../../src/app/shared/models/publications.model";
import {Subscription} from "rxjs";
import {PublicationsResolverService} from "../../../../../../src/app/shared/services/publications-resolver.service";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  publicationsData: publicationsContent;
  publicationsList: publicationsListItem[] = [];
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


  constructor(private publicationsResolverService: PublicationsResolverService) { }

  ngOnInit() {
    this.getPublicationsData();
  }

  getPublicationsData(): void {
    let publicationsSub = this.publicationsResolverService.getPageData(this.publicationsList.length, 6).subscribe((publicationsData: publicationsContent) => {
      this.publicationsData = undefined;
      setTimeout(() => {
        this.publicationsData = publicationsData;
        this.publicationsList = this.publicationsList.concat(publicationsData.publicationsList);
        this.showLoadMore = this.publicationsList.length < this.publicationsData.publicationsListTotal;
      }, 200)

    });
    this.subscriptions.push(publicationsSub);
  }

  filterByTag(tag) {
    this.publicationsResolverService.selectedPublicationsTag.next(tag);
    this.selectedTag = tag.label;
    if (this.selectedYear) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    }
    else {
      let publicationsFilterSub = this.publicationsResolverService.getFilteredDataByTag(tag.label).subscribe((publicationsFilteredData: publicationsContent) => {
        this.publicationsData = undefined;
        setTimeout(() => {
          this.publicationsData = publicationsFilteredData;
          this.publicationsList = publicationsFilteredData.publicationsList;
          this.showLoadMore = false;
          if(this.publicationsResolverService.selectedPublicationsTag.getValue()) {
            this.publicationsData.tags.find(tag => tag.id == this.publicationsResolverService.selectedPublicationsTag.getValue().id).selected = true;
          }
        }, 200)

      });
      this.subscriptions.push(publicationsFilterSub);
    }
  }

  filterByYear(year) {
    this.selectedYear = year.year;
    if (this.selectedTag) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    }
    else {
      let publicationsFilterSub = this.publicationsResolverService.getFilteredDataByYear(year.year).subscribe((publicationsFilteredData: publicationsContent) => {
        this.publicationsData = undefined;
        setTimeout(() => {
          this.publicationsData = publicationsFilteredData;
          this.publicationsList = publicationsFilteredData.publicationsList;
          this.showLoadMore = false;
        }, 200)

      });
      this.subscriptions.push(publicationsFilterSub);
    }
  }

  filterByYearAndTag(year, tag) {
    let publicationsFilterSub = this.publicationsResolverService.getFilteredDataByYearAndTags(year, tag).subscribe((publicationsFilteredData: publicationsContent) => {
      this.publicationsData = undefined;
      setTimeout(() => {
        this.publicationsData = publicationsFilteredData;
        this.publicationsList = publicationsFilteredData.publicationsList;
        this.showLoadMore = false;
        if(this.publicationsResolverService.selectedPublicationsTag.getValue()) {
          this.publicationsData.tags.find(tag => tag.id == this.publicationsResolverService.selectedPublicationsTag.getValue().id).selected = true;
        }
      }, 200)

    });
    this.subscriptions.push(publicationsFilterSub);
  }

  clearData() {
    // @ts-ignore
    this.categoriesList[0].yearsList.map(year => year.selected = false);
    this.selectedYear = this.selectedTag = null;
    this.publicationsList = [];
    this.getPublicationsData();
  }

}
