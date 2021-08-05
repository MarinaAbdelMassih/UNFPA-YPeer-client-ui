import {ISection} from "./sections.model";
import {ISession} from "./lectures.model";
import {IStuff} from "./stuff.model";

export interface IFinishedStuffes {
  finishedStuffIds: number[];
  finishedQuizzesIds: number[];
  graduated: boolean;
}

export interface IFeedback {
  id: number;
  reviewText: string;
  courseRating: number;
  updateTimes: number;
}

export interface IFeedbackToSend {
  reviewType: string;
  reviewableId: number;
  reviewText: string;
  courseRating: number;
  id?: number;
}

export interface ILocalPosition {
  section: ISection;
  lecture: ISession;
  stuff: IStuff
}
