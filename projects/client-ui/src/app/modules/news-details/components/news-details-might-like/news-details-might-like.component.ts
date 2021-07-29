import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-details-might-like',
  templateUrl: './news-details-might-like.component.html',
  styleUrls: ['./news-details-might-like.component.scss']
})
export class NewsDetailsMightLikeComponent implements OnInit {
  @Input() cardDetails;
  current = 0;

  constructor() {
  }

  ngOnInit() {
  }

  next(current: number): void {
    this.current = current + 1;
  }

  prev(current: number): void {
    this.current = current - 1;
  }

}
