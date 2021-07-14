import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-tags',
  templateUrl: './news-tags.component.html',
  styleUrls: ['./news-tags.component.scss']
})
export class NewsTagsComponent implements OnInit {
  @Input() tagsList;
  constructor() { }

  ngOnInit() {
  }

}
