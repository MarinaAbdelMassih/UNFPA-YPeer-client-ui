import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  @Input() eventsLists;
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
