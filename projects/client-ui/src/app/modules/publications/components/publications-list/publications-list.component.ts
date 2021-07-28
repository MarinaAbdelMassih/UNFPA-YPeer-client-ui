import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.scss']
})
export class PublicationsListComponent implements OnInit {
  @Input() publicationsLists;
  @Output() loadMoreClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() showLoadMoreButton: boolean;

  constructor() {
  }

  ngOnInit() {
  }
  loadMoreData() {
    this.loadMoreClicked.emit(true);
  }

}
