export interface eventsContent {
  eventsList: eventsListItem[];
  tags: tag[];
  eventsListTotal?: number;
  eventsDetailsItem?: eventsDetailsItem[];

}

export interface eventsListItem {
  id: number;
  label: { AR: string, EN: string };
  title: { AR: string, EN: string };
  description: { AR: string, EN: string };
  date: { AR: string, EN: string };
  image: string;
}

export interface eventsDetailsItem {
  id?: number;
  dateAr?: string;
  dateEn?: string;
  detailsDescriptionAr1?: string;
  detailsDescriptionEn1?: string;
  detailsDescriptionAr2?: string;
  detailsDescriptionEn2?: string;

  ourStoryAr1?: string;
  ourStoryAr2?: string;
  ourStoryAr3?: string;
  ourStoryAr4?: string;
  ourStoryEn1?: string;
  ourStoryEn2?: string;
  ourStoryEn3?: string;
  ourStoryEn4?: string;
  ourStoryImage?: string;
}

export interface tag {
  id: number;
  name: { AR: string, EN: string };
  label: string;
  selected?: boolean;
}

export class EventsModel implements eventsContent {
  eventsList: eventsListItem[];
  tags: tag[];
  eventsListTotal?: number;

  constructor(eventsData: any) {
    this.eventsList = EventsModel.setEventsList(eventsData.eventsListCollection.items);
    this.tags = EventsModel.setTags(eventsData.eventsTagsCollection.items);
    this.eventsListTotal = eventsData.eventsListCollection.total;
  }

  private static setEventsList(eventsListItems: any[]): eventsListItem[] {
    return eventsListItems.map((eventsListItem) => {
      return {
        id: eventsListItem.id,
        label: {AR: eventsListItem.labelAr, EN: eventsListItem.labelEn},
        title: {AR: eventsListItem.titleAr, EN: eventsListItem.titleEn},
        description: {AR: eventsListItem.descriptionAr, EN: eventsListItem.descriptionEn},
        date: {AR: eventsListItem.dateAr, EN: eventsListItem.dateEn},
        image: eventsListItem.image.url
      };
    });
  }

  private static setEventsItem(eventsItem: any[]): eventsDetailsItem[] {
    return eventsItem.map((eventsItem) => {
      return {
        id: eventsItem.id,
        date: {AR: eventsItem.dateAr, EN: eventsItem.dateEn},
        detailsDesc1: {AR: eventsItem.detailsDescriptionAr1, EN: eventsItem.detailsDescriptionEn1},
        detailsDesc2: {AR: eventsItem.detailsDescriptionAr2, EN: eventsItem.detailsDescriptionEn2},
        ourStory1: {AR: eventsItem.ourStoryAr1, EN: eventsItem.ourStoryEn1},
        ourStory2: {AR: eventsItem.ourStoryAr2, EN: eventsItem.ourStoryEn2},
        ourStory3: {AR: eventsItem.ourStoryAr3, EN: eventsItem.ourStoryEn3},
        ourStory4: {AR: eventsItem.ourStoryAr4, EN: eventsItem.ourStoryEn4},
        ourStoryImage: eventsItem.ourStoryImage.url
      };
    });
  }


  private static setTags(tags: any[]): tag[] {
    return tags.map((tag) => {
      return {
        id: tag.id,
        name: {AR: tag.nameAr, EN: tag.nameEn},
        label: tag.label
      };
    });
  }

}


