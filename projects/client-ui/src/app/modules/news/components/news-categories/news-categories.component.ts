import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-categories',
  templateUrl: './news-categories.component.html',
  styleUrls: ['./news-categories.component.scss']
})
export class NewsCategoriesComponent implements OnInit {
  @Input() categoriesList;
  constructor() { }

  ngOnInit() {
  }

}
