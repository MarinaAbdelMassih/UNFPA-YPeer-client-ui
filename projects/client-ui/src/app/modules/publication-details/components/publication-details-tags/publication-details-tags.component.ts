import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publication-details-tags',
  templateUrl: './publication-details-tags.component.html',
  styleUrls: ['./publication-details-tags.component.scss']
})
export class PublicationDetailsTagsComponent implements OnInit {
  @Input() tagsList;

  constructor() { }

  ngOnInit() {
  }

}
