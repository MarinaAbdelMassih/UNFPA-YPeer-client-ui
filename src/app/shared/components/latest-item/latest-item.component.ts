import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-latest-item',
  templateUrl: './latest-item.component.html',
  styleUrls: ['./latest-item.component.scss']
})
export class LatestItemComponent implements OnInit {
  @Input() latestItems;

  constructor() { }

  ngOnInit() {
  }

}
