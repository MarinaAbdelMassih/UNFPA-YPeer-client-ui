import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-details-categories',
  templateUrl: './news-details-categories.component.html',
  styleUrls: ['./news-details-categories.component.scss']
})
export class NewsDetailsCategoriesComponent implements OnInit {
  @Input() categoriesList;

  constructor() {
  }

  ngOnInit() {
  }

}
