import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {newsListItem} from "../../../../../../../../src/app/shared/models/news.model";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() newsLists: newsListItem[];
  @Output() loadMoreClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() showLoadMoreButton: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  loadMoreData() {
    this.loadMoreClicked.emit(true);
  }

}
