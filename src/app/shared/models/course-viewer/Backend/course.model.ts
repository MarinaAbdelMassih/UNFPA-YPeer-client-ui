export interface ICourse {
  id: number;
  title: string;
  description: string;
  languageId: number;
  gradeId: number;
  gradeName: { AR: string, EN: string };
  subjectName: string;
  subjectId: number;
  videoId: string;
  lessonsNo: number;
  percentageShare?: number;
  teachers?: ITeacher[];
  assessment?: { id: number }[];
  learningObjectives?: ILearningObjective[];
  totalTime?: number;
  totalProgress?: number;
  actualProgress?: number;
  progress?: number;
  typeId?: number;
  isEnrolled: boolean;
  videosCount: number;
}

export interface ITeacher {
  userId: number;
  name: string;
  title: string;
}

export interface ILearningObjective {
  id: number;
  title: string;
  order: number;
  actualProgress?: number;
  totalTime: number;
  elapsedTime: number;
  children: ILOChild[];
}

export interface ILOChild {
  id: number;
  typeId: LOChildType;
  title: string;
  order: number;
  content?: string;
  totalProgress?: number;
  actualProgress?: number;
}

export enum LOChildType {
  VIDEO,
  INTERACTIVE,
  RESOURCE,
  ARTICLE,
  QUIZ
}
