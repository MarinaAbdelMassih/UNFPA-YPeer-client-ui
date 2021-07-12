import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publications-categories',
  templateUrl: './publications-categories.component.html',
  styleUrls: ['./publications-categories.component.scss']
})
export class PublicationsCategoriesComponent implements OnInit {
  @Input() categoriesList;
  constructor() { }

  ngOnInit() {
  }

}
