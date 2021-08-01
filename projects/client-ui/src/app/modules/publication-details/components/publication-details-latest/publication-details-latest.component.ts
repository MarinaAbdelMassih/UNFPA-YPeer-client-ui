import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publication-details-latest',
  templateUrl: './publication-details-latest.component.html',
  styleUrls: ['./publication-details-latest.component.scss']
})
export class PublicationDetailsLatestComponent implements OnInit {
  @Input() latestItems;

  constructor() { }

  ngOnInit() {
  }

}
