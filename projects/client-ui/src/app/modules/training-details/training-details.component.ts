import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {ActivatedRoute} from '@angular/router';
import {tag, trainingsContent, trainingsDetailsItem, trainingsListItem} from '../../../../../../src/app/shared/models/trainings.model';
import {trainingsResolverService} from '../../../../../../src/app/shared/services/trainings-resolver.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  relatedTrainings: trainingsListItem[];
  tagsList: tag[];
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

  latestTraining: trainingsListItem[];
  trainingsDetailsData: trainingsDetailsItem;
  trainingsBasicData: trainingsListItem;
  index;

  constructor(private TrainingsResolverService: trainingsResolverService, public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
    console.log('index is', this.index);
  }

  ngOnInit() {
    this.getTrainingsData();
    this.getTrainingDetailsData();
  }

  getTrainingsData(): void {
    let trainingsSub = this.TrainingsResolverService.resolve().subscribe((trainingsData: trainingsContent) => {
      this.tagsList = trainingsData.tags;
      this.trainingsBasicData = trainingsData.trainingsList.filter(item => item.id == this.index)[0];
      this.relatedTrainings = trainingsData.trainingsList.filter(item => (item.tagLabel == this.trainingsBasicData.tagLabel
        && item.id != this.index));
      trainingsData.trainingsList.map(item => item.trainingDate = new Date(item.trainingDate));
      this.latestTraining = trainingsData.trainingsList.sort((a, b) => (b.trainingDate - a.trainingDate));
    });
    this.subscriptions.push(trainingsSub);
  }


  getTrainingDetailsData(): void {
    let trainingsSub = this.TrainingsResolverService.getPageDetails(this.index).subscribe((trainingsData: trainingsContent) => {
      this.trainingsDetailsData = undefined;
      setTimeout(() => {
        this.trainingsDetailsData = trainingsData.trainingsDetailsItem[0];
      }, 200);
    });
    this.subscriptions.push(trainingsSub);
  }
}

