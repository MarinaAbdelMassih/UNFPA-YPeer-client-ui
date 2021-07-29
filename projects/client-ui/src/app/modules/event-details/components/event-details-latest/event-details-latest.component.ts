import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-details-latest',
  templateUrl: './event-details-latest.component.html',
  styleUrls: ['./event-details-latest.component.scss']
})
export class EventDetailsLatestComponent implements OnInit {
  @Input() latestItems;

  constructor() { }

  ngOnInit() {
  }

}
