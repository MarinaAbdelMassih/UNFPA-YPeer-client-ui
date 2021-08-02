import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {mediaContent, mediaListItem} from '../../../../../../src/app/shared/models/media.model';
import {MediaResolverService} from '../../../../../../src/app/shared/services/media-resolver.service';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {newsContent} from '../../../../../../src/app/shared/models/news.model';
import {NewsResolverService} from '../../../../../../src/app/shared/services/news-resolver.service';
import {EventsResolverService} from '../../../../../../src/app/shared/services/events-resolver.service';
import {StoriesResolverService} from '../../../../../../src/app/shared/services/stories-resolver.service';
import {eventsContent} from '../../../../../../src/app/shared/models/events.model';
import {storiesContent} from '../../../../../../src/app/shared/models/stories.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MediaComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  mediaData: mediaContent;
  mediaList: mediaListItem[] = [];
  showLoadMore = true;
  selectedTag: string;
  selectedYear: number;
  newsCount: number;
  eventsCount: number;
  storiesCount: number;

  categoriesList: CategoryModel[] = [
    {title: {EN: 'News', AR: 'الأخبار'}, count: this.newsCount, hideToggle: true, url: 'news'},
    {title: {EN: 'Events', AR: 'الأحداث'}, count: this.eventsCount, hideToggle: true, url: 'events'},
    {title: {EN: 'Stories', AR: 'القصص'}, count: this.storiesCount, hideToggle: true, url: 'stories'},
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

  constructor(private mediaResolverService: MediaResolverService,
              private newsResolverService: NewsResolverService,
              private eventsResolverService: EventsResolverService,
              private storiesResolverService: StoriesResolverService) {
  }

  ngOnInit() {
    this.getMediaData();
    this.getCategoriesCount();
  }

  getMediaData(): void {
    let mediaSub = this.mediaResolverService.getPageData(this.mediaList.length, 6).subscribe((mediaData: mediaContent) => {
      this.mediaData = undefined;
      setTimeout(() => {
        this.mediaData = mediaData;
        this.mediaList = this.mediaList.concat(mediaData.mediaList);
        this.showLoadMore = this.mediaList.length < this.mediaData.mediaListTotal;
      }, 200);

    });
    this.subscriptions.push(mediaSub);
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

  filterByTag(tag) {
    this.mediaResolverService.selectedTag.next(tag);
    this.selectedTag = tag.label;
    if (this.selectedYear) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    } else {
      let mediaFilterSub = this.mediaResolverService.getFilteredData(tag.label).subscribe((mediaFilteredData: mediaContent) => {
        this.mediaData = undefined;
        setTimeout(() => {
          this.mediaData = mediaFilteredData;
          this.mediaList = mediaFilteredData.mediaList;
          this.showLoadMore = false;
          if (this.mediaResolverService.selectedTag.getValue()) {
            this.mediaData.tags.find(tag => tag.id == this.mediaResolverService.selectedTag.getValue().id).selected = true;
          }
        }, 200);

      });
      this.subscriptions.push(mediaFilterSub);
    }
  }

  filterByYear(year) {
    this.selectedYear = year.year;
    if (this.selectedTag) {
      this.filterByYearAndTag(this.selectedYear, this.selectedTag);
    } else {
      let mediaFilterSub = this.mediaResolverService.getFilteredDataByYear(year.year).subscribe((mediaFilteredData: mediaContent) => {
        this.mediaData = undefined;
        setTimeout(() => {
          this.mediaData = mediaFilteredData;
          this.mediaList = mediaFilteredData.mediaList;
          this.showLoadMore = false;
        }, 200);

      });
      this.subscriptions.push(mediaFilterSub);
    }
  }

  filterByYearAndTag(year, tag) {
    let mediaFilterSub = this.mediaResolverService.getFilteredDataByYearAndTags(year, tag).subscribe((mediaFilteredData: mediaContent) => {
      this.mediaData = undefined;
      setTimeout(() => {
        this.mediaData = mediaFilteredData;
        this.mediaList = mediaFilteredData.mediaList;
        this.showLoadMore = false;
        if (this.mediaResolverService.selectedTag.getValue()) {
          this.mediaData.tags.find(tag => tag.id == this.mediaResolverService.selectedTag.getValue().id).selected = true;
        }
      }, 200);

    });
    this.subscriptions.push(mediaFilterSub);
  }

  clearData() {
    // @ts-ignore
    this.categoriesList[3].yearsList.map(year => year.selected = false);
    this.selectedYear = this.selectedTag = null;
    this.mediaList = [];
    this.getMediaData();
  }

}
