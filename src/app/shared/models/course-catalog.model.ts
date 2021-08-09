export interface courseCatalogContent {
  illustrativeData: illustrative;
  instructorsList: instructor[];
  advancedCoursesList: advancedCourse[];
}

export interface illustrative {
  title: { AR: string, EN: string };
  date: { AR: string, EN: string };
  description: { AR: string, EN: string };
  image: string;
  introductoryVideo: string;
}

export interface instructor {
  id: number;
  name: { AR: string, EN: string };
  title: { AR: string, EN: string };
  description: { AR: string, EN: string };
  image: string;
}

export interface advancedCourse {
  id: number;
  name: { AR: string, EN: string };
  description: { AR: string, EN: string };
  image: string;
}

export class CourseCatalogModel implements courseCatalogContent {
  illustrativeData: illustrative;
  instructorsList: instructor[];
  advancedCoursesList: advancedCourse[];

  constructor(courseCatalogData: any) {
    this.illustrativeData = CourseCatalogModel.setIllustrativeList(courseCatalogData.illustrativeList);
    this.instructorsList = CourseCatalogModel.setInstructorsList(courseCatalogData.instructorsListCollection.items);
    this.advancedCoursesList = CourseCatalogModel.setAdvancedCoursesList(courseCatalogData.advancedCoursesListCollection.items)
  }

  private static setIllustrativeList(illustrativeData: any): illustrative {
      return {
        title: {AR: illustrativeData.titleAr, EN: illustrativeData.titleEn},
        date: {AR: illustrativeData.dateAr, EN: illustrativeData.dateEn},
        description: {AR: illustrativeData.descriptionAr, EN: illustrativeData.descriptionEn},
        image: illustrativeData.image.url,
        introductoryVideo: illustrativeData.introductoryVideo
      };
  }

  private static setInstructorsList(instructorsItems: any[]): instructor[] {
    return instructorsItems.map((instructorItem) => {
      return {
        id: instructorItem.id,
        name: {AR: instructorItem.nameAr, EN: instructorItem.nameEn},
        title: {AR: instructorItem.titleAr, EN: instructorItem.titleEn},
        description: {AR: instructorItem.descriptionAr, EN: instructorItem.descriptionEn},
        image: instructorItem.image.url
      };
    });
  }

  private static setAdvancedCoursesList(advancedCoursesItems: any[]): advancedCourse[] {
    return advancedCoursesItems.map((advancedCourseItem) => {
      return {
        id: advancedCourseItem.id,
        name: {AR: advancedCourseItem.nameAr, EN: advancedCourseItem.nameEn},
        description: {AR: advancedCourseItem.descriptionAr, EN: advancedCourseItem.descriptionEn},
        image: advancedCourseItem.image.url
      };
    });
  }

}
