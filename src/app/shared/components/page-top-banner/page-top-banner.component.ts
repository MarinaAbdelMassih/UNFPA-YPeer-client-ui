import {Component, Input, OnInit} from '@angular/core';
import {TranslationModel} from '../../models/translation.model';

@Component({
  selector: 'app-page-top-banner',
  templateUrl: './page-top-banner.component.html',
  styleUrls: ['./page-top-banner.component.scss']
})
export class PageTopBannerComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() title: TranslationModel;

  constructor() { }

  ngOnInit() {
  }

}
