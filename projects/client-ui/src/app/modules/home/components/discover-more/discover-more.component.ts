import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-discover-more',
  templateUrl: './discover-more.component.html',
  styleUrls: ['./discover-more.component.scss']
})
export class DiscoverMoreComponent implements OnInit {

  items = [{
    img: 'assets/images/discover-more-news.png',
    title: {EN: 'News', AR: 'الأخبار'},
    link: 'https://www.facebook.com/YPeerEgypt/posts/4108147635897535'
  },
    {
      img: 'assets/images/discover-more-events.png',
      title: {EN: 'Events', AR: 'الأحداث'},
      link: 'https://www.facebook.com/YPeerEgypt/posts/3609951259050511'
    },
    {
      img: 'assets/images/discover-more-stories.png',
      title: {EN: 'Stories', AR: 'القصص'},
      link: 'https://www.facebook.com/YPeerEgypt/posts/3589282801117357'
    },
    {
      img: 'assets/images/discover-more-publications.png',
      title: {EN: 'Publications', AR: 'المنشورات'},
      link: 'https://drive.google.com/file/d/1xQpMeMkTBcr8EVV2Kbw6943GV-N10q1r/view?usp=sharing'
    },
    {
      img: 'assets/images/discover-more-training.png', title: {EN: 'Training Manuals', AR: 'كتيبات التدريب'}, link:
        'https://drive.google.com/file/d/1OWkxR802eAgqp_sJLSWcFHbbaoIJ5LEs/view?usp=sharing'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
