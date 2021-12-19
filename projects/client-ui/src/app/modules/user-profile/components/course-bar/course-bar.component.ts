import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from '../../../../../../../../src/app/shared/models/translation.model';

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
  @Input() disabled: boolean;
  @Output() btnClicked: EventEmitter<boolean> = new EventEmitter<false>();
  @Output() btnShareClicked: EventEmitter<boolean> = new EventEmitter<false>();
  @Output() courseClicked: EventEmitter<boolean> = new EventEmitter<false>();

  constructor() {
  }

  ngOnInit() {
    this.score = Math.round(this.score);
  }

  onClick(): void {
    this.btnClicked.emit(true);
  }

  onCourseClicked(): void {
    this.courseClicked.emit(true);
  }

  onShareClick() {
    this.btnShareClicked.emit(true);
  }
}
