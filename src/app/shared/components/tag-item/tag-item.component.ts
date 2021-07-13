import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from '../../models/translation.model';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.scss']
})
export class TagItemComponent implements OnInit {
  @Input() tagName : TranslationModel;
  @Input() tagLabel : string;
  @Output() tagClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  tagFilterClicked() {
    this.tagClicked.emit(this.tagLabel);
  }


}
