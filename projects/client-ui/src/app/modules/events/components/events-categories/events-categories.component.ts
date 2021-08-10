import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryModel} from "../../../../../../../../src/app/shared/models/category.model";

@Component({
  selector: 'app-events-categories',
  templateUrl: './events-categories.component.html',
  styleUrls: ['./events-categories.component.scss']
})
export class EventsCategoriesComponent implements OnInit {
  @Input() categoriesList: CategoryModel[];
  @Output() eventFilterClicked: EventEmitter<CategoryModel> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  filterEvents(event) {
    this.eventFilterClicked.emit(event)
  }

}
