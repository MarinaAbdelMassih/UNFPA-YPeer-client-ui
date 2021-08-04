import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-courses-section',
  templateUrl: './advanced-courses-section.component.html',
  styleUrls: ['./advanced-courses-section.component.scss']
})
export class AdvancedCoursesSectionComponent implements OnInit {

  coursesList = [
    {
      image: 'assets/images/course-image-1.png',
      title: {EN: 'ADVANCED COURSE NAME', AR: 'اسم الدورة'},
      description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.', AR: ''}
    },
    {
      image: 'assets/images/course-image-1.png',
      title: {EN: 'ADVANCED COURSE NAME', AR: 'اسم الدورة'},
      description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.', AR: ''}
    },
    {
      image: 'assets/images/course-image-1.png',
      title: {EN: 'ADVANCED COURSE NAME', AR: 'اسم الدورة'},
      description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.', AR: ''}
    },
    {
      image: 'assets/images/course-image-1.png',
      title: {EN: 'ADVANCED COURSE NAME', AR: 'اسم الدورة'},
      description: {EN: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.', AR: ''}
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
