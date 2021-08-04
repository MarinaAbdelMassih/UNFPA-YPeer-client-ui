export interface publicationsContent {
  publicationsList: publicationsListItem[];
  tags: tag[];
  publicationsListTotal?: number;
}

export interface publicationsListItem {
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

export class PublicationsModel implements publicationsContent{
  publicationsList: publicationsListItem[];
  tags: tag[];
  publicationsListTotal?: number;

  constructor(publicationsData: any) {
    this.publicationsList = PublicationsModel.setPublicationsList(publicationsData.publicationsListCollection.items);
    this.tags = PublicationsModel.setTags(publicationsData.publicationsTagsCollection.items);
    this.publicationsListTotal = publicationsData.publicationsListCollection.total;
  }

  private static setPublicationsList(publicationsListItems: any[]): publicationsListItem[]{
    return publicationsListItems.map((publicationsListItem) => {
      return {
        id: publicationsListItem.id,
        label : {AR: publicationsListItem.labelAr, EN: publicationsListItem.labelEn},
        title : {AR: publicationsListItem.titleAr, EN: publicationsListItem.titleEn},
        description : {AR: publicationsListItem.descriptionAr, EN: publicationsListItem.descriptionEn},
        date : {AR: publicationsListItem.dateAr, EN: publicationsListItem.dateEn},
        image: publicationsListItem.image.url
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


