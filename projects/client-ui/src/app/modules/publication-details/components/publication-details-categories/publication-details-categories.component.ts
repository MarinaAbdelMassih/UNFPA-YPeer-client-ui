import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publication-details-categories',
  templateUrl: './publication-details-categories.component.html',
  styleUrls: ['./publication-details-categories.component.scss']
})
export class PublicationDetailsCategoriesComponent implements OnInit {
  @Input() categoriesList;

  constructor() { }

  ngOnInit() {
  }

}
