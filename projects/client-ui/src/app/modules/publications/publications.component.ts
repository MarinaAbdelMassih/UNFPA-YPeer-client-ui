import { Component, OnInit } from '@angular/core';
import {eventsContent, eventsListItem} from '../../../../../../src/app/shared/models/events.model';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  publicationsList = [
    {
      id: 1,
      label: {EN: 'publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 2,
      label: {EN: 'publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-2.png'
    },
    {
      id: 3,
      label: {EN: 'publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 4,
      label: {EN: 'publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-2.png'
    },
    {
      id: 5,
      label: {EN: 'publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 6,
      label: {EN: 'publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-2.png'
    },
    {
      id: 7,
      label: {EN: 'publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 8,
      label: {EN: 'publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-2.png'
    }
  ];

  categoriesList = [
    {title: 'Year', hideToggle: false},
  ];

  tagsList = [
    {id: 1, name: {EN: 'productive health', AR: 'صحة منتجة'}},
    {id: 2, name: {EN: 'sexual health', AR: 'الصحة الجنسية'}},
    {id: 3, name: {EN: 'maternal health', AR: 'الصحه الذهنيه'}},
    {id: 4, name: {EN: 'gender-based violence', AR: 'العنف القائم على النوع الاجتماعي'}},
    {id: 5, name: {EN: 'family planning', AR: 'خطة العائلة'}},
  ];

  constructor() { }

  ngOnInit() {
  }

}
