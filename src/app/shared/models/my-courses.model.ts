export interface IMyCourses {
  id: number,
  name: string,
  progress: number,
  score: number,
  hasCertificate: boolean,
  courseStatus: CourseStatus
}

export enum CourseStatus {
  PendingInWaitingList = 1,
  PendingAndNoPlaceInWaitingList,
  Approved,
  deleted
}
