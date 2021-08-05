import {Component, Input, OnInit} from '@angular/core';
import {trainingsListItem} from '../../../../../../../../src/app/shared/models/trainings.model';

@Component({
  selector: 'app-training-details-latest',
  templateUrl: './training-details-latest.component.html',
  styleUrls: ['./training-details-latest.component.scss']
})
export class TrainingDetailsLatestComponent implements OnInit {
  @Input() latestItems: trainingsListItem[];

  constructor() { }

  ngOnInit() {
  }

}
