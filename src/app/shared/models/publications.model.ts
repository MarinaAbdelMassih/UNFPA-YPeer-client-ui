export interface publicationsContent {
  publicationsList: publicationsListItem[];
  tags: tag[];
  publicationsListTotal?: number;
  publicationsDetailsItem?: publicationsDetailsItem[];

}

export interface publicationsListItem {
  id: number;
  label: { AR: string, EN: string };
  title: { AR: string, EN: string };
  description: { AR: string, EN: string };
  date: { AR: string, EN: string };
  image: string;
}

export interface publicationsDetailsItem {
  id?: number;
  date?: { AR: string, EN: string };
  detailsDescrption1?: { AR: string, EN: string };
  detailsDescrption2?: { AR: string, EN: string };
  paragraph1?: { AR: string, EN: string };
  paragraph2?: { AR: string, EN: string };
  paragraph3?: { AR: string, EN: string };
  paragraph4?: { AR: string, EN: string };
}

export interface tag {
  id: number;
  name: { AR: string, EN: string };
  selected?: boolean;
}

export class PublicationsModel implements publicationsContent {
  publicationsList: publicationsListItem[];
  tags: tag[];
  publicationsListTotal?: number;
  publicationsDetailsItem?: publicationsDetailsItem[];


  constructor(publicationsData: any) {
    this.publicationsList = PublicationsModel.setPublicationsList(publicationsData.publicationsListCollection.items);
    this.tags = PublicationsModel.setTags(publicationsData.publicationsTagsCollection.items);
    this.publicationsListTotal = publicationsData.publicationsListCollection.total;
    this.publicationsDetailsItem = PublicationsModel.setPublicationsItem(publicationsData.publicationsListCollection.items);

  }

  private static setPublicationsItem(publicationsItem: any[]): publicationsDetailsItem[] {
    return publicationsItem.map((publicationsItem) => {
      return {
        id: publicationsItem.id,
        date: {AR: publicationsItem.dateAr, EN: publicationsItem.dateEn},
        detailsDescrption1: {AR: publicationsItem.detailsDescrptionAr1, EN: publicationsItem.detailsDescrptionEn1},
        detailsDescrption2: {AR: publicationsItem.detailsDescrptionAr2, EN: publicationsItem.detailsDescrptionEn2},
        paragraph1: {AR: publicationsItem.paragraphAr1, EN: publicationsItem.paragraphEn1},
        paragraph2: {AR: publicationsItem.paragraphAr2, EN: publicationsItem.paragraphEn2},
        paragraph3: {AR: publicationsItem.paragraphAr3, EN: publicationsItem.paragraphEn3},
        paragraph4: {AR: publicationsItem.paragraphAr4, EN: publicationsItem.paragraphEn4},
      };
    });
  }

  private static setPublicationsList(publicationsListItems: any[]): publicationsListItem[] {
    return publicationsListItems.map((publicationsListItem) => {
      return {
        id: publicationsListItem.id,
        label: {AR: publicationsListItem.labelAr, EN: publicationsListItem.labelEn},
        title: {AR: publicationsListItem.titleAr, EN: publicationsListItem.titleEn},
        description: {AR: publicationsListItem.descriptionAr, EN: publicationsListItem.descriptionEn},
        date: {AR: publicationsListItem.dateAr, EN: publicationsListItem.dateEn},
        image: publicationsListItem.image.url
      };
    });
  }

  private static setTags(tags: any[]): tag[] {
    return tags.map((tag) => {
      return {
        id: tag.id,
        label: tag.label,
        name: {AR: tag.nameAr, EN: tag.nameEn}
      };
    });
  }

}


