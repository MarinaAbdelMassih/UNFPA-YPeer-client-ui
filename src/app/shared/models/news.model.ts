export interface newsContent {
  newsList: newsListItem[];
  tags: tag[];
}

export interface newsListItem {
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

export class NewsModel implements newsContent{
  newsList: newsListItem[];
  tags: tag[];

  constructor(newsData: any) {
    this.newsList = NewsModel.setNewsList(newsData.newsListCollection.items);
    this.tags = NewsModel.setTags(newsData.newsTagsCollection.items);
  }

  private static setNewsList(newsListItems: any[]): newsListItem[]{
    return newsListItems.map((newsListItem) => {
      return {
        id: newsListItem.id,
        label : {AR: newsListItem.labelAr, EN: newsListItem.labelEn},
        title : {AR: newsListItem.titleAr, EN: newsListItem.titleEn},
        description : {AR: newsListItem.descriptionAr, EN: newsListItem.descriptionEn},
        date : {AR: newsListItem.dateAr, EN: newsListItem.dateEn},
        image: newsListItem.image.url
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


