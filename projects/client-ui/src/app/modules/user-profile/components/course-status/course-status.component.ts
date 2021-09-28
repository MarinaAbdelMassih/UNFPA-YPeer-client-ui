import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-status',
  templateUrl: './course-status.component.html',
  styleUrls: ['./course-status.component.scss']
})
export class CourseStatusComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() showBtn = true;

  constructor() {
  }

  ngOnInit() {
  }

}
