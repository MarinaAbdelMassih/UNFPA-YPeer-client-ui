export interface eventsContent {
  eventsList: eventsListItem[];
  tags: tag[];
}

export interface eventsListItem {
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

export class EventsModel implements eventsContent{
  eventsList: eventsListItem[];
  tags: tag[];

  constructor(eventsData: any) {
    this.eventsList = EventsModel.setEventsList(eventsData.eventsListCollection.items);
    this.tags = EventsModel.setTags(eventsData.eventsTagsCollection.items);
  }

  private static setEventsList(eventsListItems: any[]): eventsListItem[]{
    return eventsListItems.map((eventsListItem) => {
      return {
        id: eventsListItem.id,
        label : {AR: eventsListItem.labelAr, EN: eventsListItem.labelEn},
        title : {AR: eventsListItem.titleAr, EN: eventsListItem.titleEn},
        description : {AR: eventsListItem.descriptionAr, EN: eventsListItem.descriptionEn},
        date : {AR: eventsListItem.dateAr, EN: eventsListItem.dateEn},
        image: eventsListItem.image.url
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

