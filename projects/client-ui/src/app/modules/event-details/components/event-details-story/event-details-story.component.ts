import {Component, Input, OnInit} from '@angular/core';
import {eventsDetailsItem} from '../../../../../../../../src/app/shared/models/events.model';

@Component({
  selector: 'app-event-details-story',
  templateUrl: './event-details-story.component.html',
  styleUrls: ['./event-details-story.component.scss']
})
export class EventDetailsStoryComponent implements OnInit {
  @Input() detailsData: eventsDetailsItem;

  constructor() { }

  ngOnInit() {
  }

}
