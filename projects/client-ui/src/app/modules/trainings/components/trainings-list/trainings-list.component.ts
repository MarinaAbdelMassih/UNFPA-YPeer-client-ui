import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {trainingsListItem} from '../../../../../../../../src/app/shared/models/trainings.model';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss']
})
export class TrainingsListComponent implements OnInit {
  @Input() trainingsLists: trainingsListItem[];
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
