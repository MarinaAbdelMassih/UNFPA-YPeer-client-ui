import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchAllContent, searchListItem} from '../../../../../../../../src/app/shared/models/search.model';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.scss']
})
export class AllResultsComponent implements OnInit {

  @Input() searchType;
  @Input() allSearchResults: SearchAllContent[] = [];
  @Output() showResultsByType: EventEmitter<any> = new EventEmitter<any>();

  models = {
    newsListItemCollection: {
      title: {
      EN: 'News',
      AR: 'الأخبار'
    },
      searchType: 'newsListItem',
    },
    eventsListItemCollection: {
      title: {
      EN: 'Events',
      AR: 'الفعاليات'
    },
      searchType: 'eventsListItem',
    },
    storiesListItemCollection: {
      title: {
      EN: 'Stories',
      AR: 'القصص'
    },
      searchType: 'storiesListItem',
    },
    publicationsListItemCollection: {
      title: {
      EN: 'Publications',
      AR: 'المنشورات'
    },
      searchType: 'publicationsListItem',
    },
    trainingsListItemCollection: {
      title: {
      EN: 'Training Manuals',
      AR: 'كتيبات التدريب'
    },
      searchType: 'trainingsListItem',
    },
  };
  constructor() { }

  ngOnInit() {
  }

  loadResultsByType(modelType) {
    this.showResultsByType.emit(this.models[modelType].searchType);
    window.scroll(0, 200);
  }
}
