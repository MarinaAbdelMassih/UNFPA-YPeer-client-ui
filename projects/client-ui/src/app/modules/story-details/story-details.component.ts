import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {ActivatedRoute} from '@angular/router';
import {
  storiesContent,
  storiesDetailsItem,
  storiesListItem,
  tag
} from '../../../../../../src/app/shared/models/stories.model';
import {StoriesResolverService} from '../../../../../../src/app/shared/services/stories-resolver.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  relatedStories: storiesListItem[];
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
  tagsList: tag[];
  latestStories: storiesListItem[];
  index;
  storiesDetailsData: storiesDetailsItem;
  storiesBasicData: storiesListItem;

  constructor(private storiesResolverService: StoriesResolverService, public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getStoriesData();
    this.getStoriesDetailsData();
  }

  getStoriesData(): void {
    let storiesSub = this.storiesResolverService.resolve().subscribe((storiesData: storiesContent) => {
      this.tagsList = storiesData.tags;
      this.relatedStories = storiesData.storiesList.filter(item => item.id != this.index);
      this.storiesBasicData = storiesData.storiesList.filter(item => item.id == this.index)[0];
      this.relatedStories = storiesData.storiesList.filter(item => (item.tagLabel == this.storiesBasicData.tagLabel
        && item.id != this.index));

      storiesData.storiesList.map(item => item.storyDate = new Date(item.storyDate));
      this.latestStories = storiesData.storiesList.sort((a,b) => (b.storyDate - a.storyDate));
    });
    this.subscriptions.push(storiesSub);
  }

  getStoriesDetailsData(): void {
    let storiesSub = this.storiesResolverService.getPageDetails(this.index).subscribe((storiesData: storiesContent) => {
      this.storiesDetailsData = undefined;
      setTimeout(() => {
        this.storiesDetailsData = storiesData.storiesDetailsItem[0];
      }, 200)

    });
    this.subscriptions.push(storiesSub);
  }

}

