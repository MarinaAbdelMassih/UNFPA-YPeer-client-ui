import { Injectable } from '@angular/core';
import {CourseViewerService} from "../../../core/http/course-viewer.service";
import {IFeedbackToSend} from "../../models/course-viewer/common-data.model";
import {IPositionToSet} from "../../models/course-viewer/position.model";
import {BehaviorSubject} from "rxjs";
import {environment} from "../../../../environments/environment";
import {CustomHttpClientService} from "../custom-http-client.service";

@Injectable({
  providedIn: 'root'
})
export class CourseViewerDataService {

  videoPlayer: BehaviorSubject<any> = new BehaviorSubject(null);
  shouldSendProgress: boolean = true;

  constructor(private courseViewerService: CourseViewerService, private customHttpClientService: CustomHttpClientService) {
  }

  setUserPosition(position: IPositionToSet): Promise<any> {
    return this.courseViewerService.setUserPosition(position);
  }

  setVideoPosition(videoPosition: { stuffId: number, time: number }): Promise<any> {
    return this.courseViewerService.setVideoPosition(videoPosition);
  }

  // setUserProgress(userProgress: { stuffId: number, type: string }): Promise<any> {
  //   return this.courseViewerService.setUserProgress(userProgress);
  // }itemTypeId

  getFeedback(): Promise<any> {
    return this.courseViewerService.getFeedback();
  }

  setFeedback(comment: string, rating: number): Promise<any> {
    let feedback: IFeedbackToSend = {
      reviewType: "COURSE",
      reviewableId: environment.courseId,
      reviewText: comment,
      courseRating: rating
    };
    return this.courseViewerService.setFeedback(feedback);
  }

  updateFeedback(id: number, comment: string, rating: number): Promise<any> {
    let feedback: IFeedbackToSend = {
      id: id,
      reviewType: "COURSE",
      reviewableId: environment.courseId,
      reviewText: comment,
      courseRating: rating
    };
    return this.courseViewerService.updateFeedback(feedback);
  }

  setUserProgress(progress: {userId: number, courseId: number, learningObjectiveChildId: number, videosCount: number }): Promise<any> {
    return new Promise<boolean>(resolve => {
      if(this.shouldSendProgress){
        this.customHttpClientService.sendBackendRequest({
          sender: 'view',
          receiver: 'progress',
          endpoint: 'user/progress',
          body: progress,
          headers: true
        }).then((data) => {
          resolve(data);
        }).catch(() => {
          resolve(false);
        });
      } else {
        resolve(true);
      }

    });
  }

  getDRMVideoObject(videoId): Promise<any> {
    return this.courseViewerService.getDRMVideoObject(videoId);
  }
}
