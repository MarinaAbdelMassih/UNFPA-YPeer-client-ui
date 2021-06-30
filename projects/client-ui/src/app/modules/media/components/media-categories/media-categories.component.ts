import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-categories',
  templateUrl: './media-categories.component.html',
  styleUrls: ['./media-categories.component.scss']
})
export class MediaCategoriesComponent implements OnInit {

  @Input() categoriesList;

  constructor() { }

  ngOnInit() {
  }

}
