import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  resourcesList = [
    {
      id: 1,
      label: {EN: 'Publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      date: {EN: 'jan 12, 2021', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 2,
      label: {EN: 'Training manual', AR: 'دليل التدريب'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      date: {EN: 'jan 12, 2021', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 3,
      label: {EN: 'Publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      date: {EN: 'jan 12, 2021', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 4,
      label: {EN: 'Training manual', AR: 'دليل التدريب'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      date: {EN: 'jan 12, 2021', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 5,
      label: {EN: 'Publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      date: {EN: 'jan 12, 2021', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 6,
      label: {EN: 'Training manual', AR: 'دليل التدريب'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      date: {EN: 'jan 12, 2021', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 7,
      label: {EN: 'Publications', AR: 'المنشورات'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      date: {EN: 'jan 12, 2021', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      image: './assets/images/latest-1.png'
    },
    {
      id: 8,
      label: {EN: 'Training manual', AR: 'دليل التدريب'},
      title: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite', AR: ''},
      date: {EN: 'jan 12, 2021', AR: ''},
      description: {EN: 'Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor ', AR: ''},
      image: './assets/images/latest-1.png'
    }
  ];

  categoriesList = [
    {title: 'Training Manuals', count: 50, hideToggle: true},
    {title: 'Publications', count: 23, hideToggle: true},
    {title: 'Year', hideToggle: false},
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
