import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from "../../../../../../../../src/app/shared/models/translation.model";

@Component({
  selector: 'app-news-tags',
  templateUrl: './news-tags.component.html',
  styleUrls: ['./news-tags.component.scss']
})
export class NewsTagsComponent implements OnInit {
  @Input() tagsList;
  @Output() tagClicked: EventEmitter<TranslationModel> = new EventEmitter<TranslationModel>();

  constructor() { }

  ngOnInit() {
  }

  tagFilterClicked(tag) {
    this.tagClicked.emit(tag);
  }

}
