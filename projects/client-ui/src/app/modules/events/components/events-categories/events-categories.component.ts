import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-events-categories',
  templateUrl: './events-categories.component.html',
  styleUrls: ['./events-categories.component.scss']
})
export class EventsCategoriesComponent implements OnInit {
  @Input() categoriesList;

  constructor() {
  }

  ngOnInit() {
  }

}
