import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {tag} from "../../models/media.model";

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.scss']
})
export class TagItemComponent implements OnInit {
  @Input() tag : tag;
  @Output() tagClicked: EventEmitter<tag> = new EventEmitter<tag>();

  constructor() { }

  ngOnInit() {
  }

  tagFilterClicked() {
    this.tagClicked.emit(this.tag);
    this.tag.selected = true;
  }


}
