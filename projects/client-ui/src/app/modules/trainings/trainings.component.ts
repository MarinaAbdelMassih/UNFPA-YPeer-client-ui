import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {trainingsContent, trainingsListItem} from "../../../../../../src/app/shared/models/trainings.model";
import {CategoryModel} from "../../../../../../src/app/shared/models/category.model";
import {trainingsResolverService} from "../../../../../../src/app/shared/services/trainings-resolver.service";

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {


  private subscriptions: Subscription[] = [];
  trainingsData: trainingsContent;
  trainingsList: trainingsListItem[] = [];
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

  constructor(private trainingsResolverService: trainingsResolverService) {
  }

  ngOnInit() {
    this.getTrainingsData();
  }

  getTrainingsData(): void {
    let trainingsSub = this.trainingsResolverService.getPageData(this.trainingsList.length, 6).subscribe((trainingsData: trainingsContent) => {
      this.trainingsData = undefined;
      setTimeout(() => {
        this.trainingsData = trainingsData;
        this.trainingsList = this.trainingsList.concat(trainingsData.trainingsList);
        this.showLoadMore = this.trainingsList.length < this.trainingsData.trainingsListTotal;
      }, 200)

    });
    this.subscriptions.push(trainingsSub);
  }

  filterByTag(tag) {
    this.trainingsResolverService.selectedTrainingsTag.next(tag);
    this.selectedTag = tag.label;
    if (this.selectedYear) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    }
    else {
      let trainingsFilterSub = this.trainingsResolverService.getFilteredDataByTag(tag.label).subscribe((trainingsFilteredData: trainingsContent) => {
        this.trainingsData = undefined;
        setTimeout(() => {
          this.trainingsData = trainingsFilteredData;
          this.trainingsList = trainingsFilteredData.trainingsList;
          this.showLoadMore = false;
          if(this.trainingsResolverService.selectedTrainingsTag.getValue()) {
            this.trainingsData.tags.find(tag => tag.id == this.trainingsResolverService.selectedTrainingsTag.getValue().id).selected = true;
          }
        }, 200)

      });
      this.subscriptions.push(trainingsFilterSub);
    }
  }

  filterByYear(year) {
    this.selectedYear = year.year;
    if (this.selectedTag) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    }
    else {
      let trainingsFilterSub = this.trainingsResolverService.getFilteredDataByYear(year.year).subscribe((trainingsFilteredData: trainingsContent) => {
        this.trainingsData = undefined;
        setTimeout(() => {
          this.trainingsData = trainingsFilteredData;
          this.trainingsList = trainingsFilteredData.trainingsList;
          this.showLoadMore = false;
        }, 200)

      });
      this.subscriptions.push(trainingsFilterSub);
    }
  }

  filterByYearAndTag(year, tag) {
    let trainingsFilterSub = this.trainingsResolverService.getFilteredDataByYearAndTags(year, tag).subscribe((trainingsFilteredData: trainingsContent) => {
      this.trainingsData = undefined;
      setTimeout(() => {
        this.trainingsData = trainingsFilteredData;
        this.trainingsList = trainingsFilteredData.trainingsList;
        this.showLoadMore = false;
        if(this.trainingsResolverService.selectedTrainingsTag.getValue()) {
          this.trainingsData.tags.find(tag => tag.id == this.trainingsResolverService.selectedTrainingsTag.getValue().id).selected = true;
        }
      }, 200)

    });
    this.subscriptions.push(trainingsFilterSub);
  }

  clearData() {
    // @ts-ignore
    this.categoriesList[0].yearsList.map(year => year.selected = false);
    this.selectedYear = this.selectedTag = null;
    this.trainingsList = [];
    this.getTrainingsData();
  }

}
