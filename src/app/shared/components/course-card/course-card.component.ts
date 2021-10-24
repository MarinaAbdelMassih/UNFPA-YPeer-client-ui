import {Component, Input, OnInit} from '@angular/core';
import {TranslationModel} from '../../models/translation.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() imageSrc : string
  @Input() title: TranslationModel;
  @Input() description: TranslationModel;

  constructor() { }

  ngOnInit() {
  }

}
