import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from "../../../../../../../../src/app/shared/models/translation.model";

@Component({
  selector: 'app-media-tags',
  templateUrl: './media-tags.component.html',
  styleUrls: ['./media-tags.component.scss']
})
export class MediaTagsComponent implements OnInit {
  @Input() tagsList;
  @Output() tagClicked: EventEmitter<TranslationModel> = new EventEmitter<TranslationModel>();

  constructor() { }

  ngOnInit() {
  }

  tagFilterClicked(tag) {
    this.tagClicked.emit(tag);
  }

}
