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
  tagLabel?: string;
  eventDate?: any;
  detailsLatestImage?: string;
}

export interface eventsDetailsItem {
  id?: number;
  date?: { AR: string, EN: string };
  detailsDesc1?: { AR: string, EN: string };
  detailsDesc2?: { AR: string, EN: string };
  sectionTitle: {AR: string, EN: string};
  ourStory1?: { AR: string, EN: string };
  ourStory2?: { AR: string, EN: string };
  ourStory3?: { AR: string, EN: string };
  ourStory4?: { AR: string, EN: string };
  ourStoryImage?: string;
  detailsBannerImage?: string;
  galleryImages?: [];
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
  eventsDetailsItem?: eventsDetailsItem[];

  constructor(eventsData: any) {
    this.eventsList = EventsModel.setEventsList(eventsData.eventsListCollection.items);
    this.tags = EventsModel.setTags(eventsData.eventsTagsCollection.items);
    this.eventsListTotal = eventsData.eventsListCollection.total;
    this.eventsDetailsItem = EventsModel.setEventsItem(eventsData.eventsListCollection.items);
  }

  private static setEventsList(eventsListItems: any[]): eventsListItem[] {
    return eventsListItems.map((eventsListItem) => {
      return {
        id: eventsListItem.id,
        label: {AR: eventsListItem.labelAr, EN: eventsListItem.labelEn},
        title: {AR: eventsListItem.titleAr, EN: eventsListItem.titleEn},
        description: {AR: eventsListItem.descriptionAr, EN: eventsListItem.descriptionEn},
        date: {AR: eventsListItem.dateAr, EN: eventsListItem.dateEn},
        image: eventsListItem.image ? eventsListItem.image.url : null,
        tagLabel: eventsListItem.tagLabel,
        eventDate: eventsListItem.eventDate,
        detailsLatestImage: eventsListItem.detailsLatestImage ? eventsListItem.detailsLatestImage.url : null
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
        sectionTitle: {AR: eventsItem.sectionTitleAr, EN: eventsItem.sectionTitleEn},
        ourStory1: {AR: eventsItem.ourStoryAr1, EN: eventsItem.ourStoryEn1},
        ourStory2: {AR: eventsItem.ourStoryAr2, EN: eventsItem.ourStoryEn2},
        ourStory3: {AR: eventsItem.ourStoryAr3, EN: eventsItem.ourStoryEn3},
        ourStory4: {AR: eventsItem.ourStoryAr4, EN: eventsItem.ourStoryEn4},
        ourStoryImage: eventsItem.ourStoryImage ? eventsItem.ourStoryImage.url : null,
        detailsBannerImage: eventsItem.detailsBannerImage ? eventsItem.detailsBannerImage.url : null,
        galleryImages: eventsItem.galleryImagesCollection ? eventsItem.galleryImagesCollection.items.map((image) => {
            return {
              image: image.url,
              title: image.title
            };
          }
          )
          : null
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


