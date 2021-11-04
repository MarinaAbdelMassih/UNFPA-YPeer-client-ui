import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  // @Input() type: string;
  // @Input() title: string;
  // @Input() description: string;
  @Input() details = [];
  @Input() tagsList;
  @Input() start?;
  @Input() end?;

  constructor() {
  }

  ngOnInit() {
  }

}
