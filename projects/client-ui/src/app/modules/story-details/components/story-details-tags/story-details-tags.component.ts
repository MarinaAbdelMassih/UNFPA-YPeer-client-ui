import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-details-tags',
  templateUrl: './story-details-tags.component.html',
  styleUrls: ['./story-details-tags.component.scss']
})
export class StoryDetailsTagsComponent implements OnInit {
  @Input() tagsList;

  constructor() {
  }

  ngOnInit() {
  }

}
