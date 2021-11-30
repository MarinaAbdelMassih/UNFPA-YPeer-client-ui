import { Injectable } from '@angular/core';
import {CustomHttpClientService} from './custom-http-client.service';
import {IMyCourses} from '../models/my-courses.model';

@Injectable({
  providedIn: 'root'
})
export class MyCoursesService {

  constructor(private customHttpClient: CustomHttpClientService) { }

  getMyCourses(myCoursesBody: {userId: number}): Promise<{ courses: IMyCourses[] }> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'user/myCourses',
      sender: 'my-courses',
      receiver: 'myCourses',
      body: myCoursesBody,
      headers: true
    });
  }

  enrollAdvanced(enrollBody: {userId: number, email: string, firstName: string, lastName: string}): Promise<{status: boolean}> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'user/enroll/advanced',
      sender: 'enroll-advanced',
      receiver: 'advanced',
      body: enrollBody,
      headers: true
    });
  }
}
