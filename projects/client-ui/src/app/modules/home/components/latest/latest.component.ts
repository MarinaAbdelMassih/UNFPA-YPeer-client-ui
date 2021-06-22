import {Component, Input, OnInit} from '@angular/core';
import {latestCardItem} from "../../../../../../../../src/app/shared/models/home.model";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  @Input() latestSections: latestCardItem[];
  constructor() { }

  ngOnInit() {
  }
}


