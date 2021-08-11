import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {ActivatedRoute} from '@angular/router';
import {PublicationsResolverService} from '../../../../../../src/app/shared/services/publications-resolver.service';
import {
  publicationsContent,
  publicationsDetailsItem,
  publicationsListItem, tag
} from '../../../../../../src/app/shared/models/publications.model';
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
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.scss']
})
export class PublicationDetailsComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  relatedPublications: publicationsListItem[];
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
  latestPublication: publicationsListItem[];
  index;
  publicationsDetailsData: publicationsDetailsItem;
  publicationsBasicData: publicationsListItem;

  constructor(private publicationsResolverService: PublicationsResolverService,
              private storiesResolverService: StoriesResolverService,
              private eventsResolverService: EventsResolverService,
              private newsResolverService: NewsResolverService,
              public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getPublicationData();
    this.getPublicationDetailsData();
    this.getCategoriesCount();
  }

  getPublicationData(): void {
    let publicationsSub = this.publicationsResolverService.resolve().subscribe((publicationsData: publicationsContent) => {
      this.tagsList = publicationsData.tags;
      this.publicationsBasicData = publicationsData.publicationsList.filter(item => item.id == this.index)[0];
      this.relatedPublications = publicationsData.publicationsList.filter(item => (item.tagLabel == this.publicationsBasicData.tagLabel
        && item.id != this.index));
      publicationsData.publicationsList.map(item => item.publicationDate = new Date(item.publicationDate));
      this.latestPublication = publicationsData.publicationsList.sort((a, b) => (b.publicationDate - a.publicationDate));
    });
    this.subscriptions.push(publicationsSub);
  }

  getPublicationDetailsData(): void {
    let publicationsSub = this.publicationsResolverService.getPageDetails(this.index).subscribe((publicationsData: publicationsContent) => {
      this.publicationsDetailsData = undefined;
      setTimeout(() => {
        this.publicationsDetailsData = publicationsData.publicationsDetailsItem[0];
      }, 200);
    });
    this.subscriptions.push(publicationsSub);
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
    const pdfUrl = this.publicationsDetailsData.pdfFile;
    const pdfName = 'file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
