import {Component, Input, OnInit} from '@angular/core';
import {publicationsDetailsItem} from '../../../../../../../../src/app/shared/models/publications.model';

@Component({
  selector: 'app-publication-details-section',
  templateUrl: './publication-details-section.component.html',
  styleUrls: ['./publication-details-section.component.scss']
})
export class PublicationDetailsSectionComponent implements OnInit {
  @Input() detailsData: publicationsDetailsItem;

  constructor() { }

  ngOnInit() {
  }

}
