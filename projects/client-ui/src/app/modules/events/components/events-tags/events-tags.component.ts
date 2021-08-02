import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-events-tags',
  templateUrl: './events-tags.component.html',
  styleUrls: ['./events-tags.component.scss']
})
export class EventsTagsComponent implements OnInit {
  @Input() tagsList;

  constructor() {
  }

  ngOnInit() {
  }

}
