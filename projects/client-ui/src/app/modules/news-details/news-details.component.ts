import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  cardDetails = [
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'Events', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'Events', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'Events', AR: ''},
    },
    // {
    //   description: {
    //     EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
    //     AR: ''
    //   },
    //   img: 'assets/images/might-like.png',
    //   title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
    //   type: {EN: 'Events', AR: ''},
    // }
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
  newsLatest = [
    {
      newsDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      newsDate: {EN: 'Jan 12, 2021', AR: ''},
      newsImage: 'assets/images/might-like.png'
    },
    {
      newsDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      newsDate: {EN: 'Jan 12, 2021', AR: ''},
      newsImage: 'assets/images/might-like.png'
    },
    {
      newsDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      newsDate: {EN: 'Jan 12, 2021', AR: ''},
      newsImage: 'assets/images/might-like.png'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
