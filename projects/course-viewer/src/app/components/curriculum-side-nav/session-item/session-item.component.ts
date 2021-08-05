import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISection} from "../../../../../../../src/app/shared/models/course-viewer/sections.model";
import {ISession} from "../../../../../../../src/app/shared/models/course-viewer/lectures.model";
import {CurriculumControlService} from "../../../../../../../src/app/shared/services/course-viewer/curriculum-control.service";

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.scss']
})
export class SessionItemComponent implements OnInit {

  @Input() section: ISection;
  @Input() session: ISession;
  @Output() selected: EventEmitter<boolean> = new EventEmitter();

  constructor(private curriculumControl: CurriculumControlService) { }

  ngOnInit() {
  }

  onQuizClick(): void {
    this.onSelect();
    this.curriculumControl.setPosition(this.section, this.session, null);
  }

  onSelect(){
    this.selected.emit(true);
  }

}
