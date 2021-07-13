import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-categories',
  templateUrl: './stories-categories.component.html',
  styleUrls: ['./stories-categories.component.scss']
})
export class StoriesCategoriesComponent implements OnInit {
  @Input() categoriesList;
  constructor() { }

  ngOnInit() {
  }

}
