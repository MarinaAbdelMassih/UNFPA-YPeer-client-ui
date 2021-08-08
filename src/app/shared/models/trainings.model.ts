export interface trainingsContent {
  trainingsList: trainingsListItem[];
  tags: tag[];
  trainingsListTotal?: number;
  trainingsDetailsItem?: trainingsDetailsItem[];

}

export interface trainingsListItem {
  id: number;
  label: {AR: string, EN: string};
  title: {AR: string, EN: string};
  description: {AR: string, EN: string};
  date: {AR: string, EN: string};
  image: string;
  tagLabel?: string;
  trainingDate?: any;
}


export interface trainingsDetailsItem {
  id?: number;
  date?: { AR: string, EN: string };
  detailsDescrption1?: { AR: string, EN: string };
  detailsDescrption2?: { AR: string, EN: string };
  paragraph1?: { AR: string, EN: string };
  paragraph2?: { AR: string, EN: string };
  paragraph3?: { AR: string, EN: string };
  paragraph4?: { AR: string, EN: string };
  detailsBannerImage?: string
}



export interface tag {
  id: number;
  name: {AR: string, EN: string};
  selected?: boolean;
}

export class TrainingsModel implements trainingsContent{
  trainingsList: trainingsListItem[];
  tags: tag[];
  trainingsListTotal?: number;
  trainingsDetailsItem?: trainingsDetailsItem[];


  constructor(trainingsData: any) {
    this.trainingsList = TrainingsModel.setTrainingsList(trainingsData.trainingsListCollection.items);
    this.tags = TrainingsModel.setTags(trainingsData.trainingsTagsCollection.items);
    this.trainingsListTotal = trainingsData.trainingsListCollection.total;
    this.trainingsDetailsItem = TrainingsModel.setTrainingsItem(trainingsData.trainingsListCollection.items);

  }
  private static setTrainingsItem(trainingsItem: any[]): trainingsDetailsItem[] {
    return trainingsItem.map((trainingsItem) => {
      return {
        id: trainingsItem.id,
        date: {AR: trainingsItem.dateAr, EN: trainingsItem.dateEn},
        detailsDescrption1: {AR: trainingsItem.detailsDescrptionAr1, EN: trainingsItem.detailsDescrptionEn1},
        detailsDescrption2: {AR: trainingsItem.detailsDescrptionAr2, EN: trainingsItem.detailsDescrptionEn2},
        paragraph1: {AR: trainingsItem.paragraphAr1, EN: trainingsItem.paragraphEn1},
        paragraph2: {AR: trainingsItem.paragraphAr2, EN: trainingsItem.paragraphEn2},
        paragraph3: {AR: trainingsItem.paragraphAr3, EN: trainingsItem.paragraphEn3},
        paragraph4: {AR: trainingsItem.paragraphAr4, EN: trainingsItem.paragraphEn4},
        detailsBannerImage: trainingsItem.detailsBannerImage ? trainingsItem.detailsBannerImage.url : null
      };
    });
  }

  private static setTrainingsList(trainingsListItems: any[]): trainingsListItem[]{
    return trainingsListItems.map((trainingsListItem) => {
      return {
        id: trainingsListItem.id,
        label : {AR: trainingsListItem.labelAr, EN: trainingsListItem.labelEn},
        title : {AR: trainingsListItem.titleAr, EN: trainingsListItem.titleEn},
        description : {AR: trainingsListItem.descriptionAr, EN: trainingsListItem.descriptionEn},
        date : {AR: trainingsListItem.dateAr, EN: trainingsListItem.dateEn},
        image: trainingsListItem.image ? trainingsListItem.image.url : null,
        tagLabel: trainingsListItem.tagLabel,
       trainingDate: trainingsListItem.trainingDate

      }
    });
  }

  private static setTags(tags: any[]): tag[] {
    return tags.map((tag) => {
      return {
        id: tag.id,
        label: tag.label,
        name: {AR: tag.nameAr, EN: tag.nameEn}
      }
    });
  }

}


