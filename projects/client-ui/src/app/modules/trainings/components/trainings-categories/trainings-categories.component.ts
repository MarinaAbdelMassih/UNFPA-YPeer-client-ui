import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryModel} from "../../../../../../../../src/app/shared/models/category.model";

@Component({
  selector: 'app-trainings-categories',
  templateUrl: './trainings-categories.component.html',
  styleUrls: ['./trainings-categories.component.scss']
})
export class TrainingsCategoriesComponent implements OnInit {
  @Input() categoriesList: CategoryModel[];
  @Output() yearClicked: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  yearFilterClicked(year){
    this.yearClicked.emit(year);
  }

}
