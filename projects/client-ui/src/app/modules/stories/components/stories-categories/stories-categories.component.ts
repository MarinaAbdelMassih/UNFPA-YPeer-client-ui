import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-story-categories',
  templateUrl: './stories-categories.component.html',
  styleUrls: ['./stories-categories.component.scss']
})
export class StoriesCategoriesComponent implements OnInit {
  @Input() categoriesList;
  @Output() yearClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  yearFilterClicked(year){
    this.yearClicked.emit(year);
  }

}
