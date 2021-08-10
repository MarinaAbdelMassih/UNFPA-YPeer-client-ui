import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {resourcesListItem} from "../../../../../../../../src/app/shared/models/resources.model";

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {
  @Input() latestResources: resourcesListItem[];
  @Output() loadMoreClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() showLoadMoreButton: boolean;

  constructor() { }

  ngOnInit() {
  }

  loadMoreData() {
    this.loadMoreClicked.emit(true);
  }

}
