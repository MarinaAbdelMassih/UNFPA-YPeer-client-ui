import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trainings-categories',
  templateUrl: './trainings-categories.component.html',
  styleUrls: ['./trainings-categories.component.scss']
})
export class TrainingsCategoriesComponent implements OnInit {
  @Input() categoriesList;
  constructor() { }

  ngOnInit() {
  }

}
