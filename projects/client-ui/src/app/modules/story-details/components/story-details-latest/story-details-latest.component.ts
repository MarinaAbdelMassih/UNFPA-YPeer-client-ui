import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-details-latest',
  templateUrl: './story-details-latest.component.html',
  styleUrls: ['./story-details-latest.component.scss']
})
export class StoryDetailsLatestComponent implements OnInit {
  @Input() latestItems;

  constructor() { }

  ngOnInit() {
  }

}
