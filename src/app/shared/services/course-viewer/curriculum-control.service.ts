import {Injectable} from '@angular/core';
import {LearnerSectionsDataService} from "./learner-sections-data.service";
import {ISection} from "../../models/course-viewer/sections.model";
import {IStuff, StuffType} from "../../models/course-viewer/stuff.model";
import {ISession, LectureType} from "../../models/course-viewer/lectures.model";
import {Router} from "@angular/router";
import {ILocalPosition} from "../../models/course-viewer/common-data.model";
import {CourseViewerDataService} from "./course-viewer-data.service";
import {IPositionToSet} from "../../models/course-viewer/position.model";

@Injectable({
  providedIn: 'root'
})
export class CurriculumControlService {

  sections: ISection[];
  userCurrentPosition: ILocalPosition;

  constructor(private learnerSectionsDataService: LearnerSectionsDataService,
              private courseViewerService: CourseViewerDataService, private router: Router) {
    this.learnerSectionsDataService.learnerSections.subscribe((sections: ISection[]) => {
      if (sections)
        this.sections = sections;
    });
    this.learnerSectionsDataService.userCurrentPosition.subscribe((currentPosition: ILocalPosition) => {
      if (currentPosition)
        this.userCurrentPosition = currentPosition;
    })
  }

  private getType(lecture: ISession, stuff: IStuff): string {
    if (lecture.type == LectureType.LECTURE) {
      if (stuff.type == StuffType.QUIZ) {
        return 'QUIZ'
      } else {
        return 'LECTURE';
      }
    } else if (lecture.type == LectureType.QUIZ) {
      return 'QUIZ';
    }
  }

  //direction: 0 for next | 1 for previous
  private addCurrentSelectionBeforeMoving(pos: { section: ISection, lecture: ISession, stuff: IStuff }, direction): void {
    if (pos.stuff)
      pos.stuff.setIsSelected(true);
    else if (pos.lecture) {
      if (pos.lecture.type == LectureType.QUIZ) {
        //@ts-ignore
        pos.lecture.setIsSelected(false);
      } else {
        if (direction == 0) {
          //@ts-ignore
          pos.lecture.lectureStuff[0].setIsSelected(true);
        } else if (direction == 1) {
          //@ts-ignore
          pos.lecture.lectureStuff[pos.lecture.lectureStuff.length - 1].setIsSelected(true);
        }
      }
    }
  }

  private removeCurrentSelectionBeforeMoving(): void {
    if (this.userCurrentPosition.stuff)
      this.userCurrentPosition.stuff.setIsSelected(false);
    else if (this.userCurrentPosition.lecture && this.userCurrentPosition.lecture.type == LectureType.QUIZ)
    //@ts-ignore
      this.userCurrentPosition.lecture.setIsSelected(false);
  }

  private getNextStuff(): { section: ISection, lecture: ISession, stuff: IStuff } {
    //@ts-ignore
    let stuff = this.userCurrentPosition.stuff.getNext(this.userCurrentPosition.lecture.lectureStuff);
    return {
      section: this.userCurrentPosition.section, lecture: this.userCurrentPosition.lecture,
      stuff: stuff
    }
  }

  private getNextLecture(): { section: ISection, lecture: ISession, stuff: IStuff } {
    let nextLecture = this.userCurrentPosition.lecture.getNext(this.userCurrentPosition.section.lectures);
    if (nextLecture.type == LectureType.QUIZ) {
      return {section: this.userCurrentPosition.section, lecture: nextLecture, stuff: null};
    } else if (nextLecture.type == LectureType.LECTURE) {
      //@ts-ignore
      let nextStuff = nextLecture.lectureStuff[0];
      return {
        section: this.userCurrentPosition.section,
        lecture: nextLecture,
        stuff: nextStuff
      };
    }
  }

  private getNextSection(): { section: ISection, lecture: ISession, stuff: IStuff } {
    let nextSection = this.userCurrentPosition.section.getNext(this.sections);
    let nextSectionLecture = nextSection.lectures[0];
    if (nextSectionLecture) {
      if (nextSectionLecture.type == LectureType.QUIZ) {
        return {section: nextSection, lecture: nextSectionLecture, stuff: null};
      } else if (nextSectionLecture.type == LectureType.LECTURE) {
        //@ts-ignore
        let nextStuff = nextSectionLecture.lectureStuff[0];
        return {
          section: nextSection,
          lecture: nextSectionLecture,
          stuff: nextStuff
        };
      }
    }
  }

  private getNext(): { section: ISection, lecture: ISession, stuff: IStuff } {
    if(!this.userCurrentPosition)
      return;
    let next = {section: null, lecture: null, stuff: null};
    if (this.userCurrentPosition.stuff && (this.userCurrentPosition.stuff.next !== (undefined || null))) {
      next = this.getNextStuff();
    } else if (this.userCurrentPosition.lecture && (this.userCurrentPosition.lecture.next !== (undefined || null))) {
      next = this.getNextLecture();
    } else if (this.userCurrentPosition.section && (this.userCurrentPosition.section.next !== (undefined || null))) {
      next = this.getNextSection();
    }
    return next;
  }

  next(): void {
    let next = this.getNext();
    if (next.section && next.lecture) {
      let type = this.getType(next.lecture, next.stuff);
      let position: IPositionToSet = {
        sectionId: next.section.id, lectureId: next.lecture.id,
        stuffId: next.stuff ? next.stuff.id : null, type: type
      };
      // this.courseViewerService.setUserPosition(position).then(() => {
      this.removeCurrentSelectionBeforeMoving();
      this.addCurrentSelectionBeforeMoving(next, 0);
      this.learnerSectionsDataService.userCurrentPosition.next(next);
      // })
    } else {
      this.router.navigate(['/account/certificate'])
    }
  }

  isNext(): boolean {
    return this.getNext().section !== null;
  }

  private getPrevStuff(): { section: ISection, lecture: ISession, stuff: IStuff } {
    //@ts-ignore
    let stuff = this.userCurrentPosition.stuff.getPrev(this.userCurrentPosition.lecture.lectureStuff);
    return {
      section: this.userCurrentPosition.section, lecture: this.userCurrentPosition.lecture,
      stuff: stuff
    }
  }

  private getPrevLecture(): { section: ISection, lecture: ISession, stuff: IStuff } {
    let prevLecture = this.userCurrentPosition.lecture.getPrev(this.userCurrentPosition.section.lectures);
    if (prevLecture.type == LectureType.QUIZ) {
      return {section: this.userCurrentPosition.section, lecture: prevLecture, stuff: null};
    } else if (prevLecture.type == LectureType.LECTURE) {
      //@ts-ignore
      let stuff = prevLecture.lectureStuff[prevLecture.lectureStuff.length - 1];
      return {
        section: this.userCurrentPosition.section,
        lecture: prevLecture,
        stuff: stuff
      };
    }
  }

  private getPrevSection(): { section: ISection, lecture: ISession, stuff: IStuff } {
    let prevSection = this.userCurrentPosition.section.getPrev(this.sections);
    let prevSectionLecture = prevSection.lectures[prevSection.lectures.length - 1];
    if (prevSectionLecture) {
      if (prevSectionLecture.type == LectureType.QUIZ) {
        return {section: prevSection, lecture: prevSectionLecture, stuff: null};
      } else if (prevSectionLecture.type == LectureType.LECTURE) {
        //@ts-ignore
        let stuff = prevSectionLecture.lectureStuff[prevSectionLecture.lectureStuff.length - 1];
        return {
          section: prevSection,
          lecture: prevSectionLecture,
          stuff: stuff
        };
      }
    }
  }

  private getPrev(): { section: ISection, lecture: ISession, stuff: IStuff } {
    if(!this.userCurrentPosition)
      return;
    let prev = {section: null, lecture: null, stuff: null};
    if (this.userCurrentPosition.stuff && (this.userCurrentPosition.stuff.prev != undefined || this.userCurrentPosition.stuff.prev != null)) {
      prev = this.getPrevStuff();
    } else if (this.userCurrentPosition.lecture && (this.userCurrentPosition.lecture.prev != undefined || this.userCurrentPosition.lecture.prev != null)) {
      prev = this.getPrevLecture();
    } else if (this.userCurrentPosition.section && (this.userCurrentPosition.section.prev != undefined || this.userCurrentPosition.section.prev != null)) {
      prev = this.getPrevSection();
    }
    return prev;
  }

  prev(): void {
    let prev = this.getPrev();
    if (prev.section && prev.lecture) {
      let type = this.getType(prev.lecture, prev.stuff);
      let position: IPositionToSet = {
        sectionId: prev.section.id,
        lectureId: prev.lecture.id,
        stuffId: prev.stuff ? prev.stuff.id : null,
        type: type
      };
      // this.courseViewerService.setUserPosition(position).then(() => {
      this.removeCurrentSelectionBeforeMoving();
      this.addCurrentSelectionBeforeMoving(prev, 1);
      this.learnerSectionsDataService.userCurrentPosition.next(prev);
      // })
    }
  }

  isPrev(): boolean {
    return this.getPrev().section !== null;
  }

  private setCurrent(section: ISection, lecture: ISession, stuff: IStuff): void {
    let current = {section: null, lecture: null, stuff: null};
    this.removeCurrentSelectionBeforeMoving();
    if (stuff) {
      stuff.setIsSelected(true);
      current = {section: section, lecture: lecture, stuff: stuff}
    } else if (lecture) {
      //@ts-ignore
      lecture.setIsSelected(true);
      current = {section: section, lecture: lecture, stuff: null}
    }
    this.learnerSectionsDataService.userCurrentPosition.next(current);
  }


  setPosition(section: ISection, lecture: ISession, stuff: IStuff): void {
    if (section && lecture) {
      let type = this.getType(lecture, stuff);
      let position: IPositionToSet = {sectionId: section.id, lectureId: lecture.id, stuffId: stuff ? stuff.id : null, type: type};

      // this.courseViewerService.setUserPosition(position).then(() => {
      this.setCurrent(section, lecture, stuff);
      // });

    }
  }

}
