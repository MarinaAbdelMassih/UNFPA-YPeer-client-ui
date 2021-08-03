export interface storiesContent {
  storiesList: storiesListItem[];
  tags: tag[];
  storiesListTotal?: number;
  storiesDetailsItem?: storiesDetailsItem[];
}

export interface storiesListItem {
  id: number;
  label: {AR: string, EN: string};
  title: {AR: string, EN: string};
  description: {AR: string, EN: string};
  date: {AR: string, EN: string};
  image: string;
}

export interface storiesDetailsItem {
  id?: number;
  date?: {AR: string, EN: string};
  videoDesc1?: {AR: string, EN: string};
  videoDesc2?: {AR: string, EN: string};
  paragraph1?: {AR: string, EN: string};
  paragraph2?: {AR: string, EN: string};
  paragraph3?: {AR: string, EN: string};
  paragraph4?: {AR: string, EN: string};
  detailsVideo?: string;
}

export interface tag {
  id: number;
  name: {AR: string, EN: string};
  selected?: boolean;
}

export class StoriesModel implements storiesContent{
  storiesList: storiesListItem[];
  tags: tag[];
  storiesListTotal?: number;
  storiesDetailsItem?: storiesDetailsItem[];

  constructor(storiesData: any) {
    this.storiesList = StoriesModel.setStoriesList(storiesData.storiesListCollection.items);
    this.tags = StoriesModel.setTags(storiesData.storiesTagsCollection.items);
    this.storiesListTotal = storiesData.storiesListCollection.total;
    this.storiesDetailsItem = StoriesModel.setStoriesItem(storiesData.storiesListCollection.items);
  }

  private static setStoriesList(storiesListItems: any[]): storiesListItem[]{
    return storiesListItems.map((storiesListItem) => {
      return {
        id: storiesListItem.id,
        label : {AR: storiesListItem.labelAr, EN: storiesListItem.labelEn},
        title : {AR: storiesListItem.titleAr, EN: storiesListItem.titleEn},
        description : {AR: storiesListItem.descriptionAr, EN: storiesListItem.descriptionEn},
        date : {AR: storiesListItem.dateAr, EN: storiesListItem.dateEn},
        image: storiesListItem.image ? storiesListItem.image.url: null
      }
    });
  }

  private static setStoriesItem(storiesItem: any[]): storiesDetailsItem[]{
    return storiesItem.map((storiesItem) => {
      return {
        id: storiesItem.id,
        date : {AR: storiesItem.dateAr, EN: storiesItem.dateEn},
        videoDesc1 : {AR: storiesItem.videoDescAr1, EN: storiesItem.videoDescEn1},
        videoDesc2 : {AR: storiesItem.videoDescAr2, EN: storiesItem.videoDescEn2},
        paragraph1 : {AR: storiesItem.paragraphAr1, EN: storiesItem.paragraphEn1},
        paragraph2 : {AR: storiesItem.paragraphAr2, EN: storiesItem.paragraphEn2},
        paragraph3 : {AR: storiesItem.paragraphAr3, EN: storiesItem.paragraphEn3},
        paragraph4 : {AR: storiesItem.paragraphAr4, EN: storiesItem.paragraphEn4},
        detailsVideo: storiesItem.detailsVideo
      }
    });
  }

  private static setTags(tags: any[]): tag[] {
    return tags.map((tag) => {
      return {
        id: tag.id,
        name: {AR: tag.nameAr, EN: tag.nameEn},
        label: tag.label
      }
    });
  }

}


