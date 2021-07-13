import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss']
})
export class StoriesListComponent implements OnInit {
  @Input() storyLists;
  constructor() { }

  ngOnInit() {
  }

}
