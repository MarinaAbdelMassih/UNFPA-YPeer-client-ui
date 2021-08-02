import { Component, OnInit } from '@angular/core';
import {CategoryModel} from '../../../../../../src/app/shared/models/category.model';
import {eventsContent, eventsListItem} from '../../../../../../src/app/shared/models/events.model';
import {EventsResolverService} from '../../../../../../src/app/shared/services/events-resolver.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.scss']
})
export class PublicationDetailsComponent implements OnInit {


  cardDetails = [
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'publication', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'publication', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'publication', AR: ''},
    },
    {
      description: {
        EN: 'Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis...',
        AR: ''
      },
      img: 'assets/images/might-like.png',
      title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      type: {EN: 'publication', AR: ''},
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
  publicationLatest = [
    {
      publicationDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      publicationDate: {EN: 'Jan 12, 2021', AR: ''},
      publicationImage: 'assets/images/might-like.png'
    },
    {
      publicationDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      publicationDate: {EN: 'Jan 12, 2021', AR: ''},
      publicationImage: 'assets/images/might-like.png'
    },
    {
      publicationDescription: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''},
      publicationDate: {EN: 'Jan 12, 2021', AR: ''},
      publicationImage: 'assets/images/might-like.png'
    }
  ];
  index;

  constructor(public activatedRoute: ActivatedRoute) {
    this.index = activatedRoute.snapshot.paramMap.get('id');
    console.log('index is', this.index);
  }

  ngOnInit() {}

}


