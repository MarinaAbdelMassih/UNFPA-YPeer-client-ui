import {Component, Input, OnInit} from '@angular/core';
import {TranslationModel} from '../../../../../../../../src/app/shared/models/translation.model';

@Component({
  selector: 'app-illustrative-video-section',
  templateUrl: './illustrative-video-section.component.html',
  styleUrls: ['./illustrative-video-section.component.scss']
})
export class IllustrativeVideoSectionComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() title: TranslationModel;
  @Input() subTitle: TranslationModel;
  @Input() description: TranslationModel;

  constructor() { }

  ngOnInit() {
  }

}
