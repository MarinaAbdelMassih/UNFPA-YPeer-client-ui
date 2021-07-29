import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-details-latest',
  templateUrl: './news-details-latest.component.html',
  styleUrls: ['./news-details-latest.component.scss']
})
export class NewsDetailsLatestComponent implements OnInit {
  @Input() latestItems;

  constructor() {
  }

  ngOnInit() {
  }

}
