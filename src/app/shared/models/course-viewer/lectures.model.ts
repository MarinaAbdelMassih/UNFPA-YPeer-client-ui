import {
  ArticleStuffModel,
  InteractiveStuffModel,
  IStuff,
  MaterialStuffModel,
  VideoStuffModel
} from "./stuff.model";
import {ILOChild, LOChildType} from "./Backend/course.model";

export enum LectureType {
  LECTURE = 0,
  QUIZ
}

export interface ISession {
  lectureStuff: any;
  id: number,
  number: number,
  sectionId: number,
  isBlocked: boolean,
  next: number,
  prev: number,
  type: LectureType,
  titleLocal: { AR: string, EN: string },
  isSelected?: boolean,
  finished?: boolean,

  getNext(lectures: ISession[]): ISession,
  getPrev(lectures: ISession[]): ISession
}

export interface ILecture extends ISession {
  lectureStuff: IStuff[]
}

export interface IQuiz extends ISession {
  isSelected: boolean;
  quizLang: string,
  userPassOrProceedQuiz: boolean;
  finished: boolean;

  setIsSelected(isSelected: boolean): void
}

class SessionsModel implements ISession {
  id: number;
  number: number;
  sectionId: number;
  type: LectureType;
  next: number;
  prev: number;
  isBlocked: boolean;
  titleLocal: { AR: string, EN: string };

  constructor(id: number, number: number, sectionId: number, type: LectureType, next: number
    , prev: number, isBlocked: boolean, titleLocal: { ARABIC: string; ENGLISH: string }) {
    this.id = id;
    this.number = number;
    this.sectionId = sectionId;
    this.type = type;
    this.next = next;
    this.prev = prev;
    this.isBlocked = isBlocked;
    this.titleLocal = {AR: titleLocal.ARABIC, EN: titleLocal.ENGLISH};
  }

  getNext(lectures: ISession[]): ISession {
    if(this.next != undefined && this.next != null)
      return lectures[this.next];
    return null;
  }

  getPrev(lectures: ISession[]): ISession {
    if(this.prev != undefined && this.prev != null)
      return lectures[this.prev];
    return null;
  }

  lectureStuff: any;
}

export class LecturesModel extends SessionsModel implements ILecture {
  lectureStuff: IStuff[];

  constructor(id: number, number: number, sectionId: number, next: number, prev: number, isBlocked,
              titleLocal: { ARABIC: string; ENGLISH: string }, lectureStuff: ILOChild[], finishedStuff) {
    super(id, number, sectionId, LectureType.LECTURE, next, prev, isBlocked.get(), titleLocal);
    this.lectureStuff = this.setLectureStuff(lectureStuff, isBlocked, finishedStuff);
  }

  private setLectureStuff(lectureStuff: ILOChild[], isBlocked, finishedStuff: {finishedStuffIds: number[], finishedQuizzesIds: number[], graduated: boolean}) {
    let finished = false;
    let stuffInstance;
    if(finishedStuff.graduated)
      finished = true;
    lectureStuff.sort((a: ILOChild, b: ILOChild) => (a.order > b.order) ? 1 : -1);
    return lectureStuff.map<IStuff>((loChild: ILOChild, index: number) => {
      if (loChild.typeId == LOChildType.VIDEO) {
        stuffInstance = new VideoStuffModel(loChild.id, this.id, this.sectionId, loChild.order, loChild.content, false,
          this.nextStuff(lectureStuff, index), this.prevStuff(lectureStuff, index), isBlocked,
          {ARABIC: loChild.title, ENGLISH: loChild.title});
      } else if (loChild.typeId == LOChildType.ARTICLE) {
        stuffInstance = new ArticleStuffModel(loChild.id, this.id, this.sectionId, loChild.order, loChild.content, this.nextStuff(lectureStuff, index),
          this.prevStuff(lectureStuff, index), isBlocked, {ARABIC: loChild.title, ENGLISH: loChild.title});
      } else if (loChild.typeId == LOChildType.RESOURCE) {
        stuffInstance = new MaterialStuffModel(loChild.id, this.id, this.sectionId, loChild.order, '', loChild.content,
          this.nextStuff(lectureStuff, index), this.prevStuff(lectureStuff, index), isBlocked,
          {ARABIC: loChild.title, ENGLISH: loChild.title});
      } else if (loChild.typeId == LOChildType.INTERACTIVE) {
        stuffInstance = new InteractiveStuffModel(loChild.id, this.id, this.sectionId, loChild.order, loChild.content,
          this.nextStuff(lectureStuff, index), this.prevStuff(lectureStuff, index), isBlocked,
          {ARABIC: loChild.title, ENGLISH: loChild.title});
      }
      if (loChild.actualProgress == 100 && stuffInstance)
        stuffInstance.setFinished(true);
      return stuffInstance;
    });
  }

  private nextStuff(array: ILOChild[], index: number): number {
    return array[index + 1] ? index + 1 : null;
  }

  private prevStuff(array: ILOChild[], index: number): number {
    return array[index - 1] ? index - 1 : null;
  }
}

export class QuizModel extends SessionsModel implements IQuiz {
  isSelected: boolean;
  quizLang: string;
  userPassOrProceedQuiz: boolean;
  finished: boolean;

  constructor(id: number, number: number, sectionId: number, next: number, prev: number, isBlocked, quizLang: string, finished: boolean,
              userPassOrProceedQuiz: boolean, titleLocal: { ARABIC: string; ENGLISH: string }) {
    super(id, number, sectionId, LectureType.QUIZ, next, prev, isBlocked.get(), titleLocal);
    this.quizLang = quizLang;
    this.userPassOrProceedQuiz = userPassOrProceedQuiz;
    this.initQuiz(userPassOrProceedQuiz, isBlocked);
    this.isSelected = false;
    this.finished = finished;
  }

  private initQuiz(userPassOrProceedQuiz, isBlocked) {
    if (!userPassOrProceedQuiz)
      isBlocked.set(true);
  }

  setIsSelected(isSelected: boolean): void{
    this.isSelected = isSelected;
  }

  setFinished(isFinished: boolean): void{
    this.finished = isFinished;
  }
}
