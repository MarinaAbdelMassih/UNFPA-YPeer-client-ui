export interface newsContent {
  newsList: newsListItem[];
  tags: tag[];
  newsListTotal?: number;
}

export interface newsListItem {
  id: number;
  label: {AR: string, EN: string};
  title: {AR: string, EN: string};
  description: {AR: string, EN: string};
  date: {AR: string, EN: string};
  detailsDesc1?: {AR: string, EN: string};
  detailsDesc2?: {AR: string, EN: string};
  ourStory1?: {AR: string, EN: string};
  ourStory2?: {AR: string, EN: string};
  ourStory3?: {AR: string, EN: string};
  ourStory4?: {AR: string, EN: string};
  image: string;
  ourStoryImage?: string;
}

export interface tag {
  id: number;
  name: {AR: string, EN: string};
  selected?: boolean;
}

export class NewsModel implements newsContent{
  newsList: newsListItem[];
  tags: tag[];
  newsListTotal?: number;

  constructor(newsData: any) {
    this.newsList = NewsModel.setNewsList(newsData.newsListCollection.items);
    this.tags = NewsModel.setTags(newsData.newsTagsCollection.items);
    this.newsListTotal = newsData.newsListCollection.total;
  }

  private static setNewsList(newsListItems: any[]): newsListItem[]{
    return newsListItems.map((newsListItem) => {
      return {
        id: newsListItem.id,
        label : {AR: newsListItem.labelAr, EN: newsListItem.labelEn},
        title : {AR: newsListItem.titleAr, EN: newsListItem.titleEn},
        description : {AR: newsListItem.descriptionAr, EN: newsListItem.descriptionEn},
        date : {AR: newsListItem.dateAr, EN: newsListItem.dateEn},
        detailsDesc1 : {AR: newsListItem.detailsDescriptionAr1, EN: newsListItem.detailsDescriptionEn1},
        detailsDesc2 : {AR: newsListItem.detailsDescriptionAr2, EN: newsListItem.detailsDescriptionEn2},
        ourStory1 : {AR: newsListItem.ourStoryAr1, EN: newsListItem.ourStoryEn1},
        ourStory2 : {AR: newsListItem.ourStoryAr2, EN: newsListItem.ourStoryEn2},
        ourStory3 : {AR: newsListItem.ourStoryAr3, EN: newsListItem.ourStoryEn3},
        ourStory4 : {AR: newsListItem.ourStoryAr4, EN: newsListItem.ourStoryEn4},
        image: newsListItem.image.url,
        ourStoryImage: newsListItem.ourStoryImage.url,
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


