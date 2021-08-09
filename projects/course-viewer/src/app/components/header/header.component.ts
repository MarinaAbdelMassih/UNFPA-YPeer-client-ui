import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common'
import {SideComponentsControlsService} from "../../../../../../src/app/shared/services/course-viewer/side-components-controls.service";

@Component({
  selector: 'course-viewer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isCurriculumOpen: boolean = true;
  isMobile: boolean = false;
  size: number;
  openSub: Subscription;

  @HostListener("window:resize", ['$event'])
  private onResize(event) {
    this.size = event.target.innerWidth;
    this.isMobile = this.size <= 600;
  }

  constructor(private sideComponentsControlsService: SideComponentsControlsService, private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sideComponentsControlsService.isCurriculumOpen.subscribe(isOpened => {
      this.isCurriculumOpen = isOpened;
    });
    this.size = window.innerWidth;
    this.isMobile = this.size <= 600;
  }

  ngOnDestroy(): void {
    if(this.openSub)
      this.openSub.unsubscribe();
  }

  toggleCurriculumDrawer() {
    this.sideComponentsControlsService.toggleCurriculum();
  }

  closeCourseViewer(): void {
    this.location.back();
  }

}
