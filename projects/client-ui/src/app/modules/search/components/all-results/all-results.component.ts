import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {searchListItem} from '../../../../../../../../src/app/shared/models/search.model';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.scss']
})
export class AllResultsComponent implements OnInit {

  @Input() searchType;
  @Input() allSearchResults: searchListItem[] = [];
  @Output() showResultsByType: EventEmitter<any> = new EventEmitter<any>();

  resultsModels = [
    {title: 'News', type: 'newsListItem', id: 'newsListItemCollection'},
    {title: 'Events', type: 'eventsListItem', id: 'eventsListItemCollection'},
    {title: 'Stories', type: 'storiesListItem', id: 'storiesListItemCollection'},
    {title: 'Publications', type: 'publicationsListItem', id: 'publicationsListItemCollection'},
    {title: 'Training Manuals', type: 'trainingsListItem', id: 'trainingsListItemCollection'},
  ]
  constructor() { }

  ngOnInit() {
  }

  loadResultsByType(searchType) {
    this.showResultsByType.emit(searchType);
  }
}
