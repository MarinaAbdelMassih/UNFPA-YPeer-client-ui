export interface mediaContent {
  mediaList: mediaListItem[];
  tags: tag[];
  mediaListTotal?: number;
}

export interface mediaListItem {
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
  label: string;
  selected?: boolean;
}

export class MediaModel implements mediaContent{
  mediaList: mediaListItem[];
  tags: tag[];
  mediaListTotal?: number;

  constructor(mediaData: any) {
    this.mediaList = MediaModel.setMediaList(mediaData.mediaListCollection.items);
    this.tags = MediaModel.setTags(mediaData.mediaTagsCollection.items);
    this.mediaListTotal = mediaData.mediaListCollection.total;
  }

  private static setMediaList(mediaListItems: any[]): mediaListItem[]{
    return mediaListItems.map((mediaListItem) => {
      return {
        id: mediaListItem.id,
        label : {AR: mediaListItem.labelAr, EN: mediaListItem.labelEn},
        title : {AR: mediaListItem.titleAr, EN: mediaListItem.titleEn},
        description : {AR: mediaListItem.descriptionAr, EN: mediaListItem.descriptionEn},
        date : {AR: mediaListItem.dateAr, EN: mediaListItem.dateEn},
        image: mediaListItem.image.url
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


