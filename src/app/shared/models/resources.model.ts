export interface resourcesContent {
  resourcesList: resourcesListItem[];
  tags: tag[];
  resourcesListTotal?: number;
}

export interface resourcesListItem {
  id: number;
  label: {AR: string, EN: string};
  title: {AR: string, EN: string};
  description: {AR: string, EN: string};
  date: {AR: string, EN: string};
  image: string;
  file: string;
}

export interface tag {
  id: number;
  name: {AR: string, EN: string};
  selected?: boolean;
}

export class ResourcesModel implements resourcesContent{
  resourcesList: resourcesListItem[];
  tags: tag[];
  resourcesListTotal?: number;

  constructor(resourcesData: any) {
    this.resourcesList = ResourcesModel.setResourcesList(resourcesData.resourcesListCollection.items);
    this.tags = ResourcesModel.setTags(resourcesData.resourcesTagsCollection.items);
    this.resourcesListTotal = resourcesData.resourcesListCollection.total;
  }

  private static setResourcesList(resourcesListItems: any[]): resourcesListItem[]{
    return resourcesListItems.map((resourcesListItem) => {
      return {
        id: resourcesListItem.id,
        label : {AR: resourcesListItem.labelAr, EN: resourcesListItem.labelEn},
        title : {AR: resourcesListItem.titleAr, EN: resourcesListItem.titleEn},
        description : {AR: resourcesListItem.descriptionAr, EN: resourcesListItem.descriptionEn},
        date : {AR: resourcesListItem.dateAr, EN: resourcesListItem.dateEn},
        image: resourcesListItem.image.url,
        file: resourcesListItem.file ? resourcesListItem.file.url: null
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


