import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISection} from "../../../../../../../src/app/shared/models/course-viewer/sections.model";

@Component({
  selector: 'app-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {

  @Input() section: ISection;
  @Output() selected: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.selected.emit(true);
  }

}
