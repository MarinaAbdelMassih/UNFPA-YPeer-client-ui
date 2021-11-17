import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from '../../../../../../../../src/app/shared/models/translation.model';
import {CourseStatus} from '../../../../../../../../src/app/shared/models/my-courses.model';

@Component({
  selector: 'app-course-bar',
  templateUrl: './course-bar.component.html',
  styleUrls: ['./course-bar.component.scss']
})
export class CourseBarComponent implements OnInit {
  @Input() name: string;
  @Input() btnText: TranslationModel;
  @Input() score: number;
  @Input() progress: number;
  @Input() isArabic: boolean;
  @Input() status: CourseStatus;
  @Output() btnClicked: EventEmitter<boolean> = new EventEmitter<false>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(): void {
    this.btnClicked.emit(true);
  }
}
