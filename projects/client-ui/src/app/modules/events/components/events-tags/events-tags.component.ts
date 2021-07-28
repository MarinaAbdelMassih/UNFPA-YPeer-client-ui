import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from "../../../../../../../../src/app/shared/models/translation.model";

@Component({
  selector: 'app-events-tags',
  templateUrl: './events-tags.component.html',
  styleUrls: ['./events-tags.component.scss']
})
export class EventsTagsComponent implements OnInit {
  @Input() tagsList;
  @Output() tagClicked: EventEmitter<TranslationModel> = new EventEmitter<TranslationModel>();

  constructor() {
  }

  ngOnInit() {
  }

  tagFilterClicked(tag) {
    this.tagClicked.emit(tag);
  }

}
