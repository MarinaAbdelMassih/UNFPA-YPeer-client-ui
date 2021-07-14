import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-media-categories',
  templateUrl: './media-categories.component.html',
  styleUrls: ['./media-categories.component.scss']
})
export class MediaCategoriesComponent implements OnInit {

  @Input() categoriesList: CategoryModel[];

  constructor() { }

  ngOnInit() {
  }

}
