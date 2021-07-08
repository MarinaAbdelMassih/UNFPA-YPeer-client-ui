import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-categories',
  templateUrl: './story-categories.component.html',
  styleUrls: ['./story-categories.component.scss']
})
export class StoryCategoriesComponent implements OnInit {
  @Input() categoriesList;
  constructor() { }

  ngOnInit() {
  }

}
