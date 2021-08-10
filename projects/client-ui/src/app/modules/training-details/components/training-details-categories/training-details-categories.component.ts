import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-training-details-categories',
  templateUrl: './training-details-categories.component.html',
  styleUrls: ['./training-details-categories.component.scss']
})
export class TrainingDetailsCategoriesComponent implements OnInit {
  @Input() categoriesList;

  constructor() { }

  ngOnInit() {
  }

}
