import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from "../../../../../../../../src/app/shared/models/category.model";

@Component({
  selector: 'app-story-details-categories',
  templateUrl: './story-details-categories.component.html',
  styleUrls: ['./story-details-categories.component.scss']
})
export class StoryDetailsCategoriesComponent implements OnInit {
  @Input() categoriesList: CategoryModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
