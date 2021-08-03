import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {storiesListItem} from "../../../../../../../../src/app/shared/models/stories.model";

@Component({
  selector: 'app-story-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss']
})
export class StoriesListComponent implements OnInit {
  @Input() storyLists: storiesListItem[];
  @Output() loadMoreClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() showLoadMoreButton: boolean;
  constructor() { }

  ngOnInit() {
  }

  loadMoreData() {
    this.loadMoreClicked.emit(true);
  }

}
