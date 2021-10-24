import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-details-tags',
  templateUrl: './event-details-tags.component.html',
  styleUrls: ['./event-details-tags.component.scss']
})
export class EventDetailsTagsComponent implements OnInit {
  @Input() tagsList;

  constructor() {
  }

  ngOnInit() {
  }

}
