import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resources-categories',
  templateUrl: './resources-categories.component.html',
  styleUrls: ['./resources-categories.component.scss']
})
export class ResourcesCategoriesComponent implements OnInit {
  @Input() categoriesList;

  constructor() {
  }

  ngOnInit() {
  }

}
