import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-publications-categories',
  templateUrl: './publications-categories.component.html',
  styleUrls: ['./publications-categories.component.scss']
})
export class PublicationsCategoriesComponent implements OnInit {
  @Input() categoriesList;
  @Output() yearClicked: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  yearFilterClicked(year){
    this.yearClicked.emit(year);
  }

}
