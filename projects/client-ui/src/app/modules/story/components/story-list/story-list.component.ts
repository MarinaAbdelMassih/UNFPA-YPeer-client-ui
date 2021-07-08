import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {
  @Input() storyLists;
  constructor() { }

  ngOnInit() {
  }

}
