import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-details-might-like',
  templateUrl: './news-details-might-like.component.html',
  styleUrls: ['./news-details-might-like.component.scss']
})
export class NewsDetailsMightLikeComponent implements OnInit {
  @Input() cardDetails;

  constructor() {
  }

  ngOnInit() {
  }

}
