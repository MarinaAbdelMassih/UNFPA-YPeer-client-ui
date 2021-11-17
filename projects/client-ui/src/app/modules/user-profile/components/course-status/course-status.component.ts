import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslationModel} from '../../../../../../../../src/app/shared/models/translation.model';

@Component({
  selector: 'app-course-status',
  templateUrl: './course-status.component.html',
  styleUrls: ['./course-status.component.scss']
})
export class CourseStatusComponent implements OnInit {

  @Input() title: TranslationModel;
  @Input() description: TranslationModel;
  @Input() btnText: TranslationModel;
  @Output() enrollClicked: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() {
  }

  ngOnInit() {
  }

  enroll(): void {
    this.enrollClicked.emit(true);
  }

}
