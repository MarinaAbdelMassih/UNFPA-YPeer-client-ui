import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IPosition, IPositionToSet} from "../../shared/models/course-viewer/position.model";
import {IFeedbackToSend, IFinishedStuffes} from "../../shared/models/course-viewer/common-data.model";

@Injectable({
  providedIn: 'root'
})
export class CourseViewerService {

  constructor(private http: HttpClient) {
  }

  registerUserToCourse(): Promise<any> {
    return this.http.post<any>(environment.serviceURI + `courses/${environment.courseId}/register`, {}).toPromise();
  }

  getLearnerSection(): Promise<any[]> {
    return this.http.get<any[]>(environment.serviceURI + `courses/${environment.courseId}/LearnerSections`).toPromise();
  }

  getFinishedStuffs(): Promise<IFinishedStuffes> {
    return this.http.get<IFinishedStuffes>(environment.serviceURI + `courses/${environment.courseId}/user/finish`).toPromise();
  }

  getUserPosition(): Promise<IPosition> {
    return this.http.get<IPosition>(environment.serviceURI + `courses/${environment.courseId}/user/position`).toPromise();
  }

  setUserPosition(position: IPositionToSet) {
    return this.http.put(environment.serviceURI + `courses/${environment.courseId}/user/position`, position).toPromise();
  }

  setVideoPosition(videoPosition: { stuffId: number, time: number }): Promise<any> {
    return this.http.put(environment.serviceURI + `courses/${environment.courseId}/video/progress`, videoPosition).toPromise();
  }

  setUserProgress(userProgress: { stuffId: number, type: string }): Promise<any> {
    return this.http.put(environment.serviceURI + `courses/${environment.courseId}/user/progress`, userProgress).toPromise();
  }

  getFeedback(): Promise<any> {
    return this.http.get<any>(environment.serviceURI + `courses/${environment.courseId}/review?status=CREATED`).toPromise();
  }

  setFeedback(feedback: IFeedbackToSend): Promise<any> {
    return this.http.post<any>(environment.serviceURI + 'reviews', feedback).toPromise();
  }

  updateFeedback(feedback: IFeedbackToSend): Promise<any> {
    return this.http.put<any>(environment.serviceURI + 'reviews', feedback).toPromise();
  }

  getDRMVideoObject(videoId): Promise<any> {
    return this.http.post<any>(environment.drmURI, {videoId: videoId}).toPromise();
  }
}
