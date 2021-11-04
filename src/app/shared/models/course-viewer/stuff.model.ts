export enum StuffType {
  VIDEO = 2,
  ARTICLE,
  MATERIAL,
  QUIZ,
  INTERACTIVE
}

export interface IStuff {
  id: number,
  lectureId: number,
  courseId: number,
  number: number,
  type: StuffType,
  next: number,
  prev: number,
  isBlocked: boolean,
  isSelected: boolean,
  titleLocal: { AR: string, EN: string },
  finished: boolean;

  getNext(stuffs: IStuff[]): IStuff,

  getPrev(stuffs: IStuff[]): IStuff,

  setIsSelected(isSelected: boolean): void,

  setFinished(isFinished: boolean): void
}

export interface IVideoStuff extends IStuff {
  link: string,
  videoPosition: number,
  finished: boolean,
  localProgress: number

  setLocalProgress(progress: number): void
}

export interface IArticleStuff extends IStuff {
  article: string
}

export interface IMaterialStuff extends IStuff {
  fileName: string,
  link: string
}

export interface IInteractiveStuff extends IStuff {
  link: string
}

export interface IQuizStuff extends IStuff {
  quizLang: string,
  userPassOrProceedQuiz: boolean;
  finished: boolean;
}

export class StuffModel implements IStuff {
  id: number;
  lectureId: number;
  courseId: number;
  number: number;
  type: StuffType;
  next: number;
  prev: number;
  isBlocked: boolean;
  isSelected: boolean;
  finished: boolean;
  titleLocal: { AR: string; EN: string };


  constructor(id: number, lectureId: number, courseId: number, number: number, type: StuffType, next: number, prev: number,
              isBlocked: boolean, titleLocal: { ARABIC: string; ENGLISH: string }) {
    this.id = id;
    this.lectureId = lectureId;
    this.courseId = courseId;
    this.number = number;
    this.type = type;
    this.next = next;
    this.prev = prev;
    this.isBlocked = isBlocked;
    this.isSelected = false;
    this.titleLocal = {AR: titleLocal.ARABIC, EN: titleLocal.ENGLISH};
  }

  setFinished(isFinished: boolean): void {
    this.finished = isFinished;
  }

  getNext(stuffs: IStuff[]): IStuff {
    if (this.next != undefined && this.next != null)
      return stuffs[this.next];
    return null;
  }

  getPrev(stuffs: IStuff[]): IStuff {
    if (this.prev != undefined && this.prev != null)
      return stuffs[this.prev];
    return null;
  }

  setIsSelected(isSelected: boolean): void{
    this.isSelected = isSelected;
  }
}

export class VideoStuffModel extends StuffModel implements IVideoStuff {
  link: string;
  videoPosition: number = 0;
  finished: boolean;
  localProgress: number = 0;

  constructor(id: number, lectureId: number, courseId: number, number: number, link: string, finished: boolean, next: number, prev: number, isBlocked,
              titleLocal: { ARABIC: string; ENGLISH: string }) {
    super(id, lectureId, courseId, number, StuffType.VIDEO, next, prev, isBlocked.get(), titleLocal);
    this.link = link;
    this.finished = finished;
  }

  setLocalProgress(progress: number){
    this.localProgress = progress;
  }
}


export class ArticleStuffModel extends StuffModel implements IArticleStuff {
  article: string;

  constructor(id: number, lectureId: number, courseId: number, number: number, article: string, next: number, prev: number, isBlocked,
              titleLocal: { ARABIC: string; ENGLISH: string }) {
    super(id, lectureId, courseId, number, StuffType.ARTICLE, next, prev, isBlocked.get(), titleLocal);
    this.article = article;
  }
}

export class MaterialStuffModel extends StuffModel implements IMaterialStuff {
  fileName: string;
  link: string;

  constructor(id: number, lectureId: number, courseId: number, number: number, fileName: string, link: string, next: number, prev: number,
              isBlocked, titleLocal: { ARABIC: string; ENGLISH: string }) {
    super(id, lectureId, courseId, number, StuffType.MATERIAL, next, prev, isBlocked.get(), titleLocal);
    this.fileName = fileName;
    this.link = link;
  }
}

export class InteractiveStuffModel extends StuffModel implements IInteractiveStuff {
  link: string;

  constructor(id: number, lectureId: number, courseId: number, number: number, link: string, next: number, prev: number,
              isBlocked, titleLocal: { ARABIC: string; ENGLISH: string }) {
    super(id, lectureId, courseId, number, StuffType.INTERACTIVE, next, prev, isBlocked.get(), titleLocal);
    this.link = link;
  }
}

export class QuizStuffModel extends StuffModel implements IQuizStuff {
  quizLang: string;
  userPassOrProceedQuiz: boolean;
  finished: boolean;
  link: string;

  constructor(id: number, lectureId: number, courseId: number, number: number, link: string, finished: boolean, next: number, prev: number, isBlocked,
              titleLocal: { ARABIC: string; ENGLISH: string }) {
    super(id, lectureId, courseId, number, StuffType.QUIZ, next, prev, isBlocked.get(), titleLocal);
    this.link = link;
    this.finished = finished;
  }

  private initQuiz(userPassOrProceedQuiz, isBlocked) {
    if (!userPassOrProceedQuiz)
      isBlocked.set(true);
  }
}
