export enum PositionType {
  LECTURE = 0,
  QUIZ,
  LECTURE_QUIZ
}

export interface IPosition {
  courseId: number,
  sectionId: number,
  lectureId: number,
  stuffId: number,
  type: any,
  videoPosition: number
}

export interface IPositionToSet {
  sectionId: number,
  lectureId: number,
  stuffId: number,
  type: any,
}

export class PositionModel implements IPosition{
  courseId: number;
  sectionId: number;
  lectureId: number;
  stuffId: number;
  type: PositionType;
  videoPosition: number;

  constructor(courseId: number, sectionId: number, lectureId: number, stuffId: number, type: string, videoPosition: number) {
    this.courseId = courseId;
    this.sectionId = sectionId;
    this.lectureId = lectureId;
    this.stuffId = stuffId;
    this.type = this.setPositionType(type);
    this.videoPosition = videoPosition;
  }

  private setPositionType(type: string): PositionType{
    if(type == "LECTURE")
      return PositionType.LECTURE;
    else if (type == "QUIZ")
      return PositionType.QUIZ;
    else if (type == "LECTURE_QUIZ")
      return PositionType.LECTURE_QUIZ
  }
}
