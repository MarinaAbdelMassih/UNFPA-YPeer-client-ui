import {Component, Input, OnInit} from '@angular/core';
import {advancedCourse} from '../../../../../../../../src/app/shared/models/course-catalog.model';

@Component({
  selector: 'app-advanced-courses-section',
  templateUrl: './advanced-courses-section.component.html',
  styleUrls: ['./advanced-courses-section.component.scss']
})
export class AdvancedCoursesSectionComponent implements OnInit {

  @Input() coursesList: advancedCourse[];

  constructor() { }

  ngOnInit() {
  }

}
