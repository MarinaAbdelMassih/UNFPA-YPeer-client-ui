import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ISection, SectionsModel} from "../../models/course-viewer/sections.model";
import {IFinishedStuffes, ILocalPosition} from "../../models/course-viewer/common-data.model";
import {IPosition, PositionModel} from "../../models/course-viewer/position.model";
import {IStuff, StuffType} from "../../models/course-viewer/Stuff.model";
import {ISession, LectureType} from "../../models/course-viewer/lectures.model";
import {DetailsService} from "../details.service";
import {ICourse} from "../../models/course-viewer/Backend/course.model";

@Injectable({
  providedIn: 'root'
})
export class LearnerSectionsDataService {

  private _isBlocked = false;
  private isBlocked = {
    set: (val: boolean) => {
      this._isBlocked = val;
    },
    get: () => this._isBlocked
  };

  courseHasProgress = false;
  hasProgress = {
    set: (val: boolean) => {
      this.courseHasProgress = val;
    },
    get: () => this.courseHasProgress
  }

  constructor(private detailsService: DetailsService) {
  }

  learnerSections: BehaviorSubject<ISection[]> = new BehaviorSubject(null);
  userCurrentPosition: BehaviorSubject<ILocalPosition> = new BehaviorSubject(null);

  setLearnerSections(courseId: number, hasProgress: boolean): Promise<{sections: ISection[], course: ICourse}> {
    return new Promise<{sections: ISection[], course: ICourse}>((resolve, reject) => {
      this.detailsService.getCourseById('view', courseId, hasProgress).then((course: ICourse) => {
        let sections = [
          {
            id: course.id,
            number: 1,
            courseId: course.id,
            lectures: course.learningObjectives,
            titleLocal: {ARABIC: course.title, ENGLISH: course.title},
            descriptionLocal: {ARABIC: '', ENGLISH: ''}
          }
        ];
        let finishedStuffs = {
          finishedStuffIds: [],
          finishedQuizzesIds: [],
          graduated: false
        }
        resolve({sections: this.initSections(sections, finishedStuffs, course.assessment, course.languageId == 1 ? 'ar' : 'en'), course: course});
      }).catch(reject);
    });
  }

  private initSections(sections: any[], finishedStuffs: IFinishedStuffes, assessments: { id: number }[], language: string): SectionsModel[] {
    return sections.map((section, index: number) => {
      let next = (array, index): number => {
        return array[index + 1] ? index + 1 : null;
      };
      let prev = (array, index): number => {
        return array[index - 1] ? index - 1 : null;
      };
      return new SectionsModel(section.id, section.number, section.courseId, next(sections, index), prev(sections, index),
        this.isBlocked, assessments ? assessments[0] : null, section.lectures, section.titleLocal, section.descriptionLocal,
        finishedStuffs, language)
    });
  }

  getUserCurrentPosition(sections: ISection[], courseId: number): Promise<ILocalPosition> {
    return new Promise<ILocalPosition>(resolve => {
      let position = new PositionModel(courseId, null, null, null,
        null, 0);
      resolve(this.setUserCurrentPosition(sections, position));
    });
  }

  private setUserCurrentPosition(sections: ISection[], position: IPosition): ILocalPosition {
    let section = sections[0];
    let lecture: ISession = null;
    let stuff: IStuff = null;
    if (section) {
      lecture = section.lectures[0];
      if (lecture && lecture.type == LectureType.LECTURE) {
        //@ts-ignore
        stuff = lecture.lectureStuff[0];
        if (stuff.type == StuffType.VIDEO)
        //@ts-ignore
          stuff.videoPosition = 0;
        stuff.setIsSelected(true);
      } else if (lecture && lecture.type == LectureType.QUIZ)
      //@ts-ignore
        lecture.setIsSelected(true);
    } else
      section = null;
    return {section: section, lecture: lecture, stuff: stuff};
  }

}
