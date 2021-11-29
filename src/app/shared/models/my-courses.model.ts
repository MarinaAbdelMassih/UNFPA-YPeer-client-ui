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
  Approved = 1,
  deleted = 2
}

export enum CourseType {
  introductory = 1,
  advanced,
}
