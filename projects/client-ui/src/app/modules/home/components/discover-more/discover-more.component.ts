import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../../../../src/environments/environment";

@Component({
  selector: 'app-discover-more',
  templateUrl: './discover-more.component.html',
  styleUrls: ['./discover-more.component.scss']
})
export class DiscoverMoreComponent implements OnInit {

  items = [{
    img: `${environment.deployUrl}/assets/images/discover-more-news.png`,
    title: {EN: 'News', AR: 'الأخبار'},
    link: 'news'
  },
    {
      img: `${environment.deployUrl}/assets/images/discover-more-events.png`,
      title: {EN: 'Events', AR: 'الأحداث'},
      link: 'events'
    },
    {
      img: `${environment.deployUrl}/assets/images/discover-more-stories.png`,
      title: {EN: 'Stories', AR: 'القصص'},
      link: 'stories'
    },
    {
      img: `${environment.deployUrl}/assets/images/discover-more-publications.png`,
      title: {EN: 'Publications', AR: 'المنشورات'},
      link: 'publications'
    },
    {
      img: `${environment.deployUrl}/assets/images/discover-more-training.png`,
      title: {EN: 'Training Manuals', AR: 'كتيبات التدريب'},
      link: 'trainings'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
