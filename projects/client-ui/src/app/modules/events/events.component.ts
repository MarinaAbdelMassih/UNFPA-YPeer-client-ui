import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {
  eventsList = [
    {
      id: 1,
      label: {EN: 'Events', AR: 'الأحداث'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 2,
      label: {EN: 'Events', AR: 'الأحداث'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-2.png'
    },
    {
      id: 3,
      label: {EN: 'Events', AR: 'الأحداث'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 4,
      label: {EN: 'Events', AR: 'الأحداث'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-2.png'
    },
    {
      id: 5,
      label: {EN: 'Events', AR: 'الأحداث'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 6,
      label: {EN: 'Events', AR: 'الأحداث'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-2.png'
    },
    {
      id: 7,
      label: {EN: 'Events', AR: 'الأحداث'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 8,
      label: {EN: 'Events', AR: 'الأحداث'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      date: {EN: 'Jan 12, 2021', AR: ''},
      image: './assets/images/latest-2.png'
    }
  ];

  categoriesList = [
    {title: 'Previous Events', count: 50, hideToggle: true},
    {title: 'Upcoming Events', count: 23, hideToggle: true},
  ];

  tagsList = [
    {id: 1, name: {EN: 'productive health', AR: 'صحة منتجة'}},
    {id: 2, name: {EN: 'sexual health', AR: 'الصحة الجنسية'}},
    {id: 3, name: {EN: 'maternal health', AR: 'الصحه الذهنيه'}},
    {id: 4, name: {EN: 'gender-based violence', AR: 'العنف القائم على النوع الاجتماعي'}},
    {id: 5, name: {EN: 'family planning', AR: 'خطة العائلة'}},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
