import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-bar',
  templateUrl: './course-bar.component.html',
  styleUrls: ['./course-bar.component.scss']
})
export class CourseBarComponent implements OnInit {
  @Input() name;
  @Input() btnText;
  @Input() score: number;
  @Input() finished = true;
  @Input() percent;
  @Input() advanced = false;

  constructor() {
  }

  ngOnInit() {
  }

}
