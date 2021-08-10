import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from "../../../../../../../../src/app/shared/models/category.model";

@Component({
  selector: 'app-news-details-categories',
  templateUrl: './news-details-categories.component.html',
  styleUrls: ['./news-details-categories.component.scss']
})
export class NewsDetailsCategoriesComponent implements OnInit {
  @Input() categoriesList: CategoryModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
