import {Component, Input, OnInit} from '@angular/core';
import {searchListItem} from "../../../../../../../../src/app/shared/models/search.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() details: searchListItem[] = [];
  @Input() tagsList;
  @Input() start?;
  @Input() end?;
  @Input() searchType?;
  images = [];

  constructor(private router: Router) {
  }
  openDetailsPage(detail) {
    switch (this.searchType) {
      case 'storiesListItem':  this.router.navigate(['/story-details/'+ detail.id]);break;
      case 'trainingsListItem': this.router.navigate(['/training-details/'+ detail.id]);break;
      case 'newsListItem': this.router.navigate(['/news-details/'+ detail.id]);break;
      case 'eventsListItem': this.router.navigate(['/event-details/'+ detail.id]);break;
      case 'publicationsListItem': this.router.navigate(['/publication-details/'+ detail.id]);break;
    }

  }
  ngOnInit() {

  }
}
