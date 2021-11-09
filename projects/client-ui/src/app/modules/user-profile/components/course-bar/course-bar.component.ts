import {Component, Input, OnInit} from '@angular/core';
import {TranslationModel} from '../../../../../../../../src/app/shared/models/translation.model';

@Component({
  selector: 'app-course-bar',
  templateUrl: './course-bar.component.html',
  styleUrls: ['./course-bar.component.scss']
})
export class CourseBarComponent implements OnInit {
  @Input() name: TranslationModel;
  @Input() btnText: TranslationModel;
  @Input() score: number;
  @Input() progress: number;
  @Input() isArabic: boolean;
  @Input() disabled: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
