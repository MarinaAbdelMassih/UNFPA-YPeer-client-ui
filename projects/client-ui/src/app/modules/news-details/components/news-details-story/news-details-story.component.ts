import {Component, Input, OnInit} from '@angular/core';
import {newsDetailsItem} from "../../../../../../../../src/app/shared/models/news.model";

@Component({
  selector: 'app-news-details-story',
  templateUrl: './news-details-story.component.html',
  styleUrls: ['./news-details-story.component.scss']
})
export class NewsDetailsStoryComponent implements OnInit {

  @Input() detailsData: newsDetailsItem;
  constructor() { }

  ngOnInit() {
  }

}
