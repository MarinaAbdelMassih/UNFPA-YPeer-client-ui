import {Component, Input, OnInit} from '@angular/core';
import {publicationsListItem} from '../../../../../../../../src/app/shared/models/publications.model';

@Component({
  selector: 'app-publication-details-latest',
  templateUrl: './publication-details-latest.component.html',
  styleUrls: ['./publication-details-latest.component.scss']
})
export class PublicationDetailsLatestComponent implements OnInit {
  @Input() latestItems: publicationsListItem[];

  constructor() { }

  ngOnInit() {
  }

}
