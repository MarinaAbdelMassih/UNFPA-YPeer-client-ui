import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {ActivatedRoute} from '@angular/router';
import {tag, trainingsContent, trainingsDetailsItem, trainingsListItem} from '../../../../../../src/app/shared/models/trainings.model';
import {trainingsResolverService} from '../../../../../../src/app/shared/services/trainings-resolver.service';
import {Subscription} from 'rxjs';
import {StoriesResolverService} from '../../../../../../src/app/shared/services/stories-resolver.service';
import {EventsResolverService} from '../../../../../../src/app/shared/services/events-resolver.service';
import {NewsResolverService} from '../../../../../../src/app/shared/services/news-resolver.service';
import {newsContent} from '../../../../../../src/app/shared/models/news.model';
import {eventsContent} from '../../../../../../src/app/shared/models/events.model';
import {storiesContent} from '../../../../../../src/app/shared/models/stories.model';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  relatedTrainings: trainingsListItem[];
  newsCount: number;
  eventsCount: number;
  storiesCount: number;
  tagsList: tag[];
  categoriesList: CategoryModel[] = [
    {title: {EN: 'News', AR: 'الأخبار'}, count: this.newsCount, hideToggle: true, url: 'news'},
    {title: {EN: 'Events', AR: 'الأحداث'}, count: this.eventsCount, hideToggle: true, url: 'events'},
    {title: {EN: 'Stories', AR: 'القصص'}, count: this.storiesCount, hideToggle: true, url: 'stories'},
    // {
    //   title: {EN: 'Year', AR: 'السنه'}, hideToggle: false, yearsList: [
    //     {year: 2018, selected: false},
    //     {year: 2019, selected: false},
    //     {year: 2020, selected: false},
    //     {year: 2021, selected: false},
    //     {year: 2022, selected: false}
    //   ]
    // },
  ];

  latestTraining: trainingsListItem[];
  trainingsDetailsData: trainingsDetailsItem;
  trainingsBasicData: trainingsListItem;
  index;

  constructor(private TrainingsResolverService: trainingsResolverService,
              private storiesResolverService: StoriesResolverService,
              private eventsResolverService: EventsResolverService,
              private newsResolverService: NewsResolverService,
              public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getTrainingsData();
    this.getTrainingDetailsData();
    this.getCategoriesCount();
  }

  getTrainingsData(): void {
    let trainingsSub = this.TrainingsResolverService.resolve().subscribe((trainingsData: trainingsContent) => {
      this.tagsList = trainingsData.tags;
      this.trainingsBasicData = trainingsData.trainingsList.filter(item => item.id == this.index)[0];
      this.relatedTrainings = trainingsData.trainingsList.filter(item =>
        ((item.tagLabel ? (this.trainingsBasicData.tagLabel).toLowerCase().search(item.tagLabel.toLowerCase()): null)
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

  getCategoriesCount(): void {
    // news count
    this.newsResolverService.getPageData(0, 0).subscribe((newsData: newsContent) => {
      setTimeout(() => {
        this.newsCount = newsData.newsListTotal;
        this.categoriesList.find(item => item.url == 'news').count = this.newsCount;
      }, 200)
    });
    // events count
    this.eventsResolverService.getPageData(0, 0).subscribe((eventsData: eventsContent) => {
      setTimeout(() => {
        this.eventsCount = eventsData.eventsListTotal;
        this.categoriesList.find(item => item.url == 'events').count = this.eventsCount;
      }, 200)
    });
    // stories count
    this.storiesResolverService.getPageData(0, 0).subscribe((storiesData: storiesContent) => {
      setTimeout(() => {
        this.storiesCount = storiesData.storiesListTotal;
        this.categoriesList.find(item => item.url == 'stories').count = this.storiesCount;
      }, 200)
    });
  }

  downloadPdf() {
    const pdfUrl = this.trainingsDetailsData.pdfFile;
    const pdfName = 'file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}

