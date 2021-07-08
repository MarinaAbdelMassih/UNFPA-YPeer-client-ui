import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-tags',
  templateUrl: './story-tags.component.html',
  styleUrls: ['./story-tags.component.scss']
})
export class StoryTagsComponent implements OnInit {
  @Input() tagsList;
  constructor() { }

  ngOnInit() {
  }

}
