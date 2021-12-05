import {Component, Input, OnInit} from '@angular/core';
import {storiesDetailsItem} from "../../../../../../../../src/app/shared/models/stories.model";
import {illustrative} from "../../../../../../../../src/app/shared/models/course-catalog.model";

@Component({
  selector: 'app-story-details-section',
  templateUrl: './story-details-section.component.html',
  styleUrls: ['./story-details-section.component.scss']
})
export class StoryDetailsSectionComponent implements OnInit {

  @Input() detailsData: storiesDetailsItem;
  videoPlayed = false;

  constructor() {
  }

  ngOnInit() {
  }

  playTheVideo(videoPlayed: boolean): void {
    this.videoPlayed = videoPlayed;
  }
}
