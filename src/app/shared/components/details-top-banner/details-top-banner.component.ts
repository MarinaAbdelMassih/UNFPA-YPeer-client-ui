import {Component, Input, OnInit} from '@angular/core';
import {TranslationModel} from '../../models/translation.model';

@Component({
  selector: 'app-details-top-banner',
  templateUrl: './details-top-banner.component.html',
  styleUrls: ['./details-top-banner.component.scss']
})
export class DetailsTopBannerComponent implements OnInit {
  @Input() detailsImageBanner: string;
  @Input() label: TranslationModel;
  @Input() title: TranslationModel;

  constructor() {
  }

  ngOnInit() {
  }

}
