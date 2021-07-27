export interface storiesContent {
  storiesList: storiesListItem[];
  tags: tag[];
  storiesListTotal?: number;
}

export interface storiesListItem {
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
}

export class StoriesModel implements storiesContent{
  storiesList: storiesListItem[];
  tags: tag[];

  constructor(storiesData: any) {
    this.storiesList = StoriesModel.setStoriesList(storiesData.storiesListCollection.items);
    this.tags = StoriesModel.setTags(storiesData.storiesTagsCollection.items);
  }

  private static setStoriesList(storiesListItems: any[]): storiesListItem[]{
    return storiesListItems.map((storiesListItem) => {
      return {
        id: storiesListItem.id,
        label : {AR: storiesListItem.labelAr, EN: storiesListItem.labelEn},
        title : {AR: storiesListItem.titleAr, EN: storiesListItem.titleEn},
        description : {AR: storiesListItem.descriptionAr, EN: storiesListItem.descriptionEn},
        date : {AR: storiesListItem.dateAr, EN: storiesListItem.dateEn},
        image: storiesListItem.image.url
      }
    });
  }

  private static setTags(tags: any[]): tag[] {
    return tags.map((tag) => {
      return {
        id: tag.id,
        name: {AR: tag.nameAr, EN: tag.nameEn}
      }
    });
  }

}


