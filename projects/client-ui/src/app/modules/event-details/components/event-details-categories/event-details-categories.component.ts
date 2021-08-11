import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-event-details-categories',
  templateUrl: './event-details-categories.component.html',
  styleUrls: ['./event-details-categories.component.scss']
})
export class EventDetailsCategoriesComponent implements OnInit {
  @Input() categoriesList: CategoryModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
