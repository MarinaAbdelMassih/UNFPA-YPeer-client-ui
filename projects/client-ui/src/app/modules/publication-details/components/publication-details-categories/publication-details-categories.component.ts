import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-publication-details-categories',
  templateUrl: './publication-details-categories.component.html',
  styleUrls: ['./publication-details-categories.component.scss']
})
export class PublicationDetailsCategoriesComponent implements OnInit {
  @Input() categoriesList: CategoryModel[];

  constructor() { }

  ngOnInit() {
  }

}
