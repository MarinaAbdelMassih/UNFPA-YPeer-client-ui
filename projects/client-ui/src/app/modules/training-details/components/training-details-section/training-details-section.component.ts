import {Component, Input, OnInit} from '@angular/core';
import {trainingsDetailsItem} from '../../../../../../../../src/app/shared/models/trainings.model';

@Component({
  selector: 'app-training-details-section',
  templateUrl: './training-details-section.component.html',
  styleUrls: ['./training-details-section.component.scss']
})
export class TrainingDetailsSectionComponent implements OnInit {
  @Input() detailsData: trainingsDetailsItem;

  constructor() { }

  ngOnInit() {
  }

}
