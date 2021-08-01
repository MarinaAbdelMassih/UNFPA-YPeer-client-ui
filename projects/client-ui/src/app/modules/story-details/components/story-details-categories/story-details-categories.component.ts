import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-details-categories',
  templateUrl: './story-details-categories.component.html',
  styleUrls: ['./story-details-categories.component.scss']
})
export class StoryDetailsCategoriesComponent implements OnInit {
  @Input() categoriesList;

  constructor() {
  }

  ngOnInit() {
  }

}
