import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {mediaContent, mediaListItem} from '../../../../../../src/app/shared/models/media.model';
import {MediaResolverService} from '../../../../../../src/app/shared/services/media-resolver.service';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';

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

  constructor(private mediaResolverService: MediaResolverService) {
  }

  ngOnInit() {
    this.getMediaData();
  }

  getMediaData(): void {
    let mediaSub = this.mediaResolverService.getPageData(this.mediaList.length, 2).subscribe((mediaData: mediaContent) => {
      this.mediaData = undefined;
      setTimeout(() => {
        this.mediaData = mediaData;
        this.mediaList = this.mediaList.concat(mediaData.mediaList);
        this.showLoadMore = this.mediaList.length < this.mediaData.mediaListTotal;
      }, 200);

    });
    this.subscriptions.push(mediaSub);
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
