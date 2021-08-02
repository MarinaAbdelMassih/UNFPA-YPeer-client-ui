import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-details-tags',
  templateUrl: './news-details-tags.component.html',
  styleUrls: ['./news-details-tags.component.scss']
})
export class NewsDetailsTagsComponent implements OnInit {
  @Input() tagsList;

  constructor() {
  }

  ngOnInit() {
  }

}
