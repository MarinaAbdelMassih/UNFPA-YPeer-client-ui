import {ILecture, IQuiz, ISession, LecturesModel, QuizModel} from "./lectures.model";
import {IFinishedStuffes} from "./common-data.model";
import {ILearningObjective} from "./Backend/course.model";

export interface ISection {
  id: number,
  number: number,
  courseId: number,
  isBlocked: boolean,
  next: number,
  prev: number,
  lectures: ISession[]
  titleLocal: { AR: string, EN: string },
  descriptionLocal: { AR: string, EN: string },

  getNext(sections: ISection[]): ISection,

  getPrev(sections: ISection[]): ISection
}

export class SectionsModel implements ISection {
  id: number;
  number: number;
  courseId: number;
  isBlocked: boolean;
  next: number;
  prev: number;
  lectures: ISession[];
  titleLocal: { AR: string; EN: string };
  descriptionLocal: { AR: string; EN: string };

  constructor(id: number, number: number, courseId: number, next: number, prev: number, isBlocked, assessment: {id: number},
              lectures: any[], titleLocal: { ARABIC: string; ENGLISH: string }, descriptionLocal: { ARABIC: string; ENGLISH: string },
              finishedStuff: IFinishedStuffes, language: string) {
    this.id = id;
    this.number = number;
    this.courseId = courseId;
    this.next = next;
    this.prev = prev;
    this.isBlocked = isBlocked.get();
    this.lectures = this.setLectures(lectures, isBlocked, finishedStuff, assessment, language);
    this.titleLocal = {AR: titleLocal.ARABIC, EN: titleLocal.ENGLISH};
    this.descriptionLocal = {AR: descriptionLocal.ARABIC, EN: descriptionLocal.ENGLISH};
  }


  private setLectures(sessions: ILearningObjective[], isBlocked, finishedStuff, assessment, language) {
    sessions.sort((a: ILearningObjective, b: ILearningObjective) => (a.order > b.order) ? 1 : -1);
    let finished = false;
    if (finishedStuff.graduated)
      finished = true;
    let order = 0,
      lastIndex = 0;
    sessions = sessions.filter((session) => {
      if (session.children.length > 0)
        return session;
    })
    let mappedSessions = sessions.map<ILecture | IQuiz>((lo: ILearningObjective, index: number) => {

      if (lo.order > order) {
        order = lo.order;
      }

      lastIndex = index;
      let nextLecture = this.nextLecture(sessions, index);
      if (!nextLecture && assessment) {
        nextLecture = index + 1;
      }

      return new LecturesModel(lo.id, lo.order, this.id, nextLecture,
        this.prevLecture(sessions, index), isBlocked,
        {ARABIC: lo.title, ENGLISH: lo.title}, lo.children, finishedStuff);

    });
    if(assessment){
      let _finished = false;
      let assessmentTitle = language == 'ar' ? {ARABIC: 'إختبار الوحدة', ENGLISH: 'إختبار الوحدة'} :
        {ARABIC: 'Unit Assessment', ENGLISH: 'Unit Assessment'};
      let quizModel =  new QuizModel(assessment.id, order+1, this.id, null,
        this.prevLecture(sessions, lastIndex+1), isBlocked, language,
        finished ? finished : _finished, true,
        assessmentTitle);
      mappedSessions.push(quizModel);
    }
    return mappedSessions;
  }

  private nextLecture(array: any[], index: number): number {
    return array[index + 1] ? index + 1 : null;
  }

  private prevLecture(array: any[], index: number): number {
    return array[index - 1] ? index - 1 : null;
  }

  getNext(sections: ISection[]): ISection {
    if (this.next != undefined && this.next != null)
      return sections[this.next];
    return null;
  }

  getPrev(sections: ISection[]): ISection {
    if (this.prev != undefined && this.prev != null)
      return sections[this.prev];
    return null;
  }
}
