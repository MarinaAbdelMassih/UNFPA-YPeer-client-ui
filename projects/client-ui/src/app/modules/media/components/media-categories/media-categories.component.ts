import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryModel} from '../../../../../../../../src/app/shared/models/category.model';

@Component({
  selector: 'app-media-categories',
  templateUrl: './media-categories.component.html',
  styleUrls: ['./media-categories.component.scss']
})
export class MediaCategoriesComponent implements OnInit {

  @Input() categoriesList: CategoryModel[];
  @Output() yearClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  yearFilterClicked(year){
    this.yearClicked.emit(year);
  }

}
