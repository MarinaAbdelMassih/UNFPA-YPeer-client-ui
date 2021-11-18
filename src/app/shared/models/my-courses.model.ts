export interface IMyCourses {
  id: number,
  name: string,
  progress: number,
  score: number,
  hasCertificate: boolean,
  courseStatus: CourseStatus,
  courseType: CourseType
}

export enum CourseStatus {
  PendingInWaitingList = 1,
  PendingAndNoPlaceInWaitingList,
  Approved,
  deleted
}

export enum CourseType {
  introductory = 1,
  advanced,
}
