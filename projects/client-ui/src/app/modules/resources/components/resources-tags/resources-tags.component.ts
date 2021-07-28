import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from "../../../../../../../../src/app/shared/models/translation.model";

@Component({
  selector: 'app-resources-tags',
  templateUrl: './resources-tags.component.html',
  styleUrls: ['./resources-tags.component.scss']
})
export class ResourcesTagsComponent implements OnInit {
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
