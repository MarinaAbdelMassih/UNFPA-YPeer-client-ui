import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-resources-categories',
  templateUrl: './resources-categories.component.html',
  styleUrls: ['./resources-categories.component.scss']
})
export class ResourcesCategoriesComponent implements OnInit {
  @Input() categoriesList: CategoryModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
