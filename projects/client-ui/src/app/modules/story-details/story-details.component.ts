import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {ActivatedRoute} from '@angular/router';
import {storiesContent, storiesListItem} from '../../../../../../src/app/shared/models/stories.model';
import {StoriesResolverService} from '../../../../../../src/app/shared/services/stories-resolver.service';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent implements OnInit {

  cardDetails = [
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/story-details-might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'stories', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/story-details-might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'stories', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/story-details-might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'stories', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/story-details-might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'stories', AR: ''},
    }
  ];

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
  tagsList = [
    {id: 1, name: {EN: 'productive health', AR: 'صحة منتجة'}},
    {id: 2, name: {EN: 'sexual health', AR: 'الصحة الجنسية'}},
    {id: 3, name: {EN: 'maternal health', AR: 'الصحه الذهنيه'}},
    {id: 4, name: {EN: 'gender-based violence', AR: 'العنف القائم على النوع الاجتماعي'}},
    {id: 5, name: {EN: 'family planning', AR: 'خطة العائلة'}},
  ];
  storyLatest = [
    {
      storyDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      storyDate: {EN: 'Jan 12, 2021', AR: ''},
      storyImage: 'assets/images/might-like.png'
    },
    {
      storyDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      storyDate: {EN: 'Jan 12, 2021', AR: ''},
      storyImage: 'assets/images/might-like.png'
    },
    {
      storyDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      storyDate: {EN: 'Jan 12, 2021', AR: ''},
      storyImage: 'assets/images/might-like.png'
    }
  ];
  index;
  storiesData: storiesContent;
  storiesList: storiesListItem[] = [];
  storiesDataDetails;

  constructor(private storiesResolverService: StoriesResolverService, public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
    console.log('index is', this.index);
  }

  ngOnInit() {
    this.getStoriesData();
  }

  getStoriesData(): void {
    let eventsSub = this.storiesResolverService.resolve().subscribe((storiesData: storiesContent) => {
      this.storiesData = storiesData[this.index];
      this.storiesDataDetails = storiesData.storiesList[this.index];
      console.log('stories', storiesData.storiesList);
    });

  }
}

