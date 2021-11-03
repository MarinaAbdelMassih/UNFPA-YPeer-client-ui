import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISection} from "../../../../../../../src/app/shared/models/course-viewer/sections.model";
import {IStuff} from "../../../../../../../src/app/shared/models/course-viewer/stuff.model";
import {ISession} from "../../../../../../../src/app/shared/models/course-viewer/lectures.model";
import {CurriculumControlService} from "../../../../../../../src/app/shared/services/course-viewer/curriculum-control.service";

@Component({
  selector: 'app-stuff-item',
  templateUrl: './stuff-item.component.html',
  styleUrls: ['./stuff-item.component.scss']
})
export class StuffItemComponent implements OnInit {

  @Input() section: ISection;
  @Input() lecture: ISession;
  @Input() stuff: IStuff;
  @Output() selected: EventEmitter<boolean> = new EventEmitter();
  constructor(private curriculumControl: CurriculumControlService) { }

  ngOnInit() {
  }

  onClick(): void {
    this.selected.emit(true);
    this.curriculumControl.setPosition(this.section, this.lecture, this.stuff);
  }

}
