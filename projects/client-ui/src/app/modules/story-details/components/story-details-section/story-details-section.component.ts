import {Component, Input, OnInit} from '@angular/core';
import {storiesDetailsItem} from "../../../../../../../../src/app/shared/models/stories.model";

@Component({
  selector: 'app-story-details-section',
  templateUrl: './story-details-section.component.html',
  styleUrls: ['./story-details-section.component.scss']
})
export class StoryDetailsSectionComponent implements OnInit {

  @Input() detailsData: storiesDetailsItem;
  constructor() { }

  ngOnInit() {
  }

}
