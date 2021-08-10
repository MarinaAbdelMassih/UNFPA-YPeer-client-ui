import {Component, Input, OnInit} from '@angular/core';
import {storiesListItem} from '../../../../../../../../src/app/shared/models/stories.model';

@Component({
  selector: 'app-story-details-latest',
  templateUrl: './story-details-latest.component.html',
  styleUrls: ['./story-details-latest.component.scss']
})
export class StoryDetailsLatestComponent implements OnInit {
  @Input() latestItems: storiesListItem[];

  constructor() {
  }

  ngOnInit() {
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
