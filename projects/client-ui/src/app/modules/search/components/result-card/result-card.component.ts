import {Component, Input, OnInit} from '@angular/core';
import {searchListItem} from '../../../../../../../../src/app/shared/models/search.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  @Input() result: searchListItem;
  @Input() searchType;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openDetailsPage(detail) {
    switch (this.searchType) {
      case 'storiesListItemCollection':  this.router.navigate(['/story-details/' + detail.id]); break;
      case 'trainingsListItemCollection': this.router.navigate(['/training-details/' + detail.id]); break;
      case 'newsListItemCollection': this.router.navigate(['/news-details/' + detail.id]); break;
      case 'eventsListItemCollection': this.router.navigate(['/event-details/' + detail.id]); break;
      case 'publicationsListItemCollection': this.router.navigate(['/publication-details/' + detail.id]); break;
    }

  }

}
