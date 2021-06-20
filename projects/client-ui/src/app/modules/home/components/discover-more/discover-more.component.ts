import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-more',
  templateUrl: './discover-more.component.html',
  styleUrls: ['./discover-more.component.scss']
})
export class DiscoverMoreComponent implements OnInit {

  items =[{img: 'assets/images/discover-more-news.png', title: 'News'}, {img: 'assets/images/discover-more-news.png', title: 'Stories'}];
  constructor() { }

  ngOnInit() {
  }

}
