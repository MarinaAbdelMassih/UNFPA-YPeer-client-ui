import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-more',
  templateUrl: './discover-more.component.html',
  styleUrls: ['./discover-more.component.scss']
})
export class DiscoverMoreComponent implements OnInit {

  items =[{img: 'assets/images/discover-more-news.png', title: 'News'},
    {img: 'assets/images/discover-more-events.png', title: 'Events'},
    {img: 'assets/images/discover-more-stories.png', title: 'Stories'},
    {img: 'assets/images/discover-more-publications.png', title: 'Publications'},
    {img: 'assets/images/discover-more-training.png', title: 'Training Manuals'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
