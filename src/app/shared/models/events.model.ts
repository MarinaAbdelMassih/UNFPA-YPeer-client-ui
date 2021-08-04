export interface eventsContent {
  eventsList: eventsListItem[];
  tags: tag[];
  eventsListTotal?: number;
}

export interface eventsListItem {
  id: number;
  label: {AR: string, EN: string};
  title: {AR: string, EN: string};
  description: {AR: string, EN: string};
  date: {AR: string, EN: string};
  image: string;
  tagLabel?: string;
  eventDate?: any;
}

export interface tag {
  id: number;
  name: {AR: string, EN: string};
  label: string;
  selected?: boolean;
}

export class EventsModel implements eventsContent{
  eventsList: eventsListItem[];
  tags: tag[];
  eventsListTotal?: number;

  constructor(eventsData: any) {
    this.eventsList = EventsModel.setEventsList(eventsData.eventsListCollection.items);
    this.tags = EventsModel.setTags(eventsData.eventsTagsCollection.items);
    this.eventsListTotal = eventsData.eventsListCollection.total;
  }

  private static setEventsList(eventsListItems: any[]): eventsListItem[]{
    return eventsListItems.map((eventsListItem) => {
      return {
        id: eventsListItem.id,
        label : {AR: eventsListItem.labelAr, EN: eventsListItem.labelEn},
        title : {AR: eventsListItem.titleAr, EN: eventsListItem.titleEn},
        description : {AR: eventsListItem.descriptionAr, EN: eventsListItem.descriptionEn},
        date : {AR: eventsListItem.dateAr, EN: eventsListItem.dateEn},
        image: eventsListItem.image.url,
        tagLabel: eventsListItem.tagLabel,
        eventDate: eventsListItem.eventDate
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


