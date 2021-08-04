import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryModel} from "../../../../../../../../src/app/shared/models/category.model";

@Component({
  selector: 'app-publications-categories',
  templateUrl: './publications-categories.component.html',
  styleUrls: ['./publications-categories.component.scss']
})
export class PublicationsCategoriesComponent implements OnInit {
  @Input() categoriesList: CategoryModel[];
  @Output() yearClicked: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  yearFilterClicked(year){
    this.yearClicked.emit(year);
  }

}
