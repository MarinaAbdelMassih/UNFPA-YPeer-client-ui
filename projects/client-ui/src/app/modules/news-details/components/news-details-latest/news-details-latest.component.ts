import {Component, Input, OnInit} from '@angular/core';
import {newsListItem} from '../../../../../../../../src/app/shared/models/news.model';

@Component({
  selector: 'app-news-details-latest',
  templateUrl: './news-details-latest.component.html',
  styleUrls: ['./news-details-latest.component.scss']
})
export class NewsDetailsLatestComponent implements OnInit {
  @Input() latestItems: newsListItem[];

  constructor() {
  }

  ngOnInit() {
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
