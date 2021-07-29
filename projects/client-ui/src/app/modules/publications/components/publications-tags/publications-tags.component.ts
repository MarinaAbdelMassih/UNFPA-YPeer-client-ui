import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from "../../../../../../../../src/app/shared/models/translation.model";

@Component({
  selector: 'app-publications-tags',
  templateUrl: './publications-tags.component.html',
  styleUrls: ['./publications-tags.component.scss']
})
export class PublicationsTagsComponent implements OnInit {
  @Input() tagsList;
  @Output() tagClicked: EventEmitter<TranslationModel> = new EventEmitter<TranslationModel>();
  constructor() { }

  ngOnInit() {
  }

  tagFilterClicked(tag) {
    this.tagClicked.emit(tag);
  }


}
