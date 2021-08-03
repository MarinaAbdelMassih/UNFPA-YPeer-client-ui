import {Component, Input, OnInit} from '@angular/core';
import {TranslationModel} from '../../models/translation.model';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.scss']
})
export class InstructorCardComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() instructorName: TranslationModel;
  @Input() instructorTitle: TranslationModel;
  @Input() instructorDescription: TranslationModel;

  constructor() { }

  ngOnInit() {
  }

}
