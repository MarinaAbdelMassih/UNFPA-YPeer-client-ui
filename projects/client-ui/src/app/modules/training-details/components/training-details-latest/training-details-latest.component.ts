import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-training-details-latest',
  templateUrl: './training-details-latest.component.html',
  styleUrls: ['./training-details-latest.component.scss']
})
export class TrainingDetailsLatestComponent implements OnInit {
  @Input() latestItems;

  constructor() { }

  ngOnInit() {
  }

}
