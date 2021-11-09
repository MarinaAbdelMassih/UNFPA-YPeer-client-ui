import {Component, Input, OnInit} from '@angular/core';
import {searchListItem} from "../../../../../../../../src/app/shared/models/search.model";

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() details: searchListItem[] = [];
  @Input() tagsList;
  @Input() start?;
  @Input() end?;
  images = [];

  constructor() {
  }

  ngOnInit() {

  }
}
