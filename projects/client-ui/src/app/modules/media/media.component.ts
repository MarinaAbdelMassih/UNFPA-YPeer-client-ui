import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  mediaList = [
    {id: 1, label: {EN: 'News', AR: 'أخبار'}, title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''}, description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', AR: ''}, date: {EN: '', AR: ''}, image: './assets/images/latest-1.png' },
    {id: 2, label: {EN: 'News', AR: 'أخبار'}, title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''}, description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', AR: ''}, date: {EN: '', AR: ''}, image: './assets/images/latest-1.png' },
    {id: 3, label: {EN: 'News', AR: 'أخبار'}, title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''}, description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', AR: ''}, date: {EN: '', AR: ''}, image: './assets/images/latest-1.png' },
    {id: 4, label: {EN: 'News', AR: 'أخبار'}, title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''}, description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', AR: ''}, date: {EN: '', AR: ''}, image: './assets/images/latest-1.png' },
    {id: 5, label: {EN: 'News', AR: 'أخبار'}, title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''}, description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', AR: ''}, date: {EN: '', AR: ''}, image: './assets/images/latest-1.png' },
    {id: 6, label: {EN: 'News', AR: 'أخبار'}, title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''}, description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', AR: ''}, date: {EN: '', AR: ''}, image: './assets/images/latest-1.png' },
    {id: 7, label: {EN: 'News', AR: 'أخبار'}, title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''}, description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', AR: ''}, date: {EN: '', AR: ''}, image: './assets/images/latest-1.png' },
    {id: 8, label: {EN: 'News', AR: 'أخبار'}, title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''}, description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', AR: ''}, date: {EN: '', AR: ''}, image: './assets/images/latest-1.png' },
    {id: 9, label: {EN: 'News', AR: 'أخبار'}, title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''}, description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', AR: ''}, date: {EN: '', AR: ''}, image: './assets/images/latest-1.png' },
    {id: 10, label: {EN: 'News', AR: 'أخبار'}, title: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', AR: ''}, description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ', AR: ''}, date: {EN: '', AR: ''}, image: './assets/images/latest-1.png' }
  ];

  categoriesList = [
    {title: 'News' , count: 50, hideToggle: true},
    {title: 'Events' , count: 23, hideToggle: true},
    {title: 'Stories' , count: 18, hideToggle: true},
    {title: 'Year', hideToggle: false},
  ];

  tagsList = [
    {id: 1, name: {EN: 'productive health', AR: ''}},
    {id: 2, name: {EN: 'sexual health', AR: ''}},
    {id: 3, name: {EN: 'maternal health', AR: ''}},
    {id: 4, name: {EN: 'gender-based violence', AR: ''}},
    {id: 5, name: {EN: 'family planning', AR: ''}},
  ];


  constructor() { }

  ngOnInit() {
  }

}
