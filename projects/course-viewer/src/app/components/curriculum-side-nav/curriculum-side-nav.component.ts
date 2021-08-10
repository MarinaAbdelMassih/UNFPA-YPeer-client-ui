import {AfterViewInit, Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {SideComponentsControlsService} from "../../../../../../src/app/shared/services/course-viewer/side-components-controls.service";
import {ISection} from "../../../../../../src/app/shared/models/course-viewer/sections.model";
import {LearnerSectionsDataService} from "../../../../../../src/app/shared/services/course-viewer/learner-sections-data.service";
import {CurriculumControlService} from "../../../../../../src/app/shared/services/course-viewer/curriculum-control.service";

@Component({
  selector: 'app-curriculum-side-nav',
  templateUrl: './curriculum-side-nav.component.html',
  styleUrls: ['./curriculum-side-nav.component.scss']
})
export class CurriculumSideNavComponent implements OnInit, AfterViewInit{

  @Input() dir;
  @ViewChild('curriculumSide', {static: false}) public curriculumSide: MatDrawer;
  sections: ISection[];
  private subs: Subscription[] = [];
  size: number;
  isMobile: boolean = false;

  @HostListener("window:resize", ['$event'])
  private onResize(event) {
    this.size = event.target.innerWidth;
    this.isMobile = this.size <= 600;
  }

  constructor(private sideComponentsControlsService: SideComponentsControlsService,
              private learnerSectionDataService: LearnerSectionsDataService, private curriculumControl: CurriculumControlService,
              private route: ActivatedRoute) {

    let learnerSectionSub = this.learnerSectionDataService.learnerSections.subscribe((sections: ISection[]) => {
      this.sections = sections;
      //this.subs.push(learnerSectionSub);
    });
  }

  ngOnInit() {
    this.size = window.innerWidth;
    this.isMobile = this.size <= 600;
  }

  ngAfterViewInit(): void {
    this.sideComponentsControlsService.setCurriculumDrawer(this.curriculumSide);
    this.route.queryParams.subscribe(param => {
      if (param.videoOrder && param.videoOrder > 0) {
        this.sideComponentsControlsService.closeCurriculum();
        this.curriculumControl.setPosition(this.sections[0], this.sections[0].lectures[0],
          this.sections[0].lectures[0].lectureStuff[param.videoOrder-1]);
      }
    });
  }

  onSelected(){
    if(this.isMobile){
      this.sideComponentsControlsService.closeCurriculum()
    }
  }

}
