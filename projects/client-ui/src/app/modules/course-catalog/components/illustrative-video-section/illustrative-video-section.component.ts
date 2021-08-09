import {Component, Input, OnInit} from '@angular/core';
import {illustrative} from '../../../../../../../../src/app/shared/models/course-catalog.model';

@Component({
  selector: 'app-illustrative-video-section',
  templateUrl: './illustrative-video-section.component.html',
  styleUrls: ['./illustrative-video-section.component.scss']
})
export class IllustrativeVideoSectionComponent implements OnInit {

  @Input() illustrativeData: illustrative;
  videoPlayed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  playTheVideo(videoPlayed: boolean): void {
    this.videoPlayed = videoPlayed;
  }

}
