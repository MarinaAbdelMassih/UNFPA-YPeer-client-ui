export interface trainingsContent {
  trainingsList: trainingsListItem[];
  tags: tag[];
  trainingsListTotal?: number;
}

export interface trainingsListItem {
  id: number;
  label: {AR: string, EN: string};
  title: {AR: string, EN: string};
  description: {AR: string, EN: string};
  date: {AR: string, EN: string};
  image: string;
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

  constructor(trainingsData: any) {
    this.trainingsList = TrainingsModel.setTrainingsList(trainingsData.trainingsListCollection.items);
    this.tags = TrainingsModel.setTags(trainingsData.trainingsTagsCollection.items);
    this.trainingsListTotal = trainingsData.trainingsListCollection.total;
  }

  private static setTrainingsList(trainingsListItems: any[]): trainingsListItem[]{
    return trainingsListItems.map((trainingsListItem) => {
      return {
        id: trainingsListItem.id,
        label : {AR: trainingsListItem.labelAr, EN: trainingsListItem.labelEn},
        title : {AR: trainingsListItem.titleAr, EN: trainingsListItem.titleEn},
        description : {AR: trainingsListItem.descriptionAr, EN: trainingsListItem.descriptionEn},
        date : {AR: trainingsListItem.dateAr, EN: trainingsListItem.dateEn},
        image: trainingsListItem.image.url
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


