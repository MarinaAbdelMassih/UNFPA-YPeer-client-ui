import {Component, Input, OnInit} from '@angular/core';
import {eventsListItem} from "../../../../../../../../src/app/shared/models/events.model";

@Component({
  selector: 'app-event-details-latest',
  templateUrl: './event-details-latest.component.html',
  styleUrls: ['./event-details-latest.component.scss']
})
export class EventDetailsLatestComponent implements OnInit {
  @Input() latestItems: eventsListItem[];

  constructor() { }

  ngOnInit() {
  }

}
