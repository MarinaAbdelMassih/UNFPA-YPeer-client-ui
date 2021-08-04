export interface newsContent {
  newsList?: newsListItem[];
  tags: tag[];
  newsListTotal?: number;
  newsDetailsItem?: newsDetailsItem[];
}

export interface newsListItem {
  id: number;
  label: {AR: string, EN: string};
  title: {AR: string, EN: string};
  description: {AR: string, EN: string};
  date: {AR: string, EN: string};
  image: string;
  tagLabel?: string;
  newsDate?: any;
}

export interface newsDetailsItem {
  id?: number;
  date?: {AR: string, EN: string};
  detailsDesc1?: {AR: string, EN: string};
  detailsDesc2?: {AR: string, EN: string};
  ourStory1?: {AR: string, EN: string};
  ourStory2?: {AR: string, EN: string};
  ourStory3?: {AR: string, EN: string};
  ourStory4?: {AR: string, EN: string};
  ourStoryImage?: string;
}

export interface tag {
  id: number;
  name: {AR: string, EN: string};
  selected?: boolean;
}

export class NewsModel implements newsContent{
  newsList?: newsListItem[];
  tags: tag[];
  newsListTotal?: number;
  newsDetailsItem?: newsDetailsItem[];

  constructor(newsData: any) {
    this.newsList = NewsModel.setNewsList(newsData.newsListCollection.items);
    this.tags = NewsModel.setTags(newsData.newsTagsCollection.items);
   this.newsListTotal = newsData.newsListCollection.total;
   this.newsDetailsItem = NewsModel.setNewsItem(newsData.newsListCollection.items);
  }

  private static setNewsList(newsListItems: any[]): newsListItem[]{
    return newsListItems.map((newsListItem) => {
      return {
        id: newsListItem.id,
        label : {AR: newsListItem.labelAr, EN: newsListItem.labelEn},
        title : {AR: newsListItem.titleAr, EN: newsListItem.titleEn},
        description : {AR: newsListItem.descriptionAr, EN: newsListItem.descriptionEn},
        date : {AR: newsListItem.dateAr, EN: newsListItem.dateEn},
        image: newsListItem.image ? newsListItem.image.url: null,
        tagLabel: newsListItem.tagLabel,
        newsDate: newsListItem.newsDate
      }
    });
  }

  private static setNewsItem(newsItem: any[]): newsDetailsItem[]{
    return newsItem.map((newsItem) => {
      return {
        id: newsItem.id,
        date : {AR: newsItem.dateAr, EN: newsItem.dateEn},
        detailsDesc1 : {AR: newsItem.detailsDescriptionAr1, EN: newsItem.detailsDescriptionEn1},
        detailsDesc2 : {AR: newsItem.detailsDescriptionAr2, EN: newsItem.detailsDescriptionEn2},
        ourStory1 : {AR: newsItem.ourStoryAr1, EN: newsItem.ourStoryEn1},
        ourStory2 : {AR: newsItem.ourStoryAr2, EN: newsItem.ourStoryEn2},
        ourStory3 : {AR: newsItem.ourStoryAr3, EN: newsItem.ourStoryEn3},
        ourStory4 : {AR: newsItem.ourStoryAr4, EN: newsItem.ourStoryEn4},
        ourStoryImage: newsItem.ourStoryImage? newsItem.ourStoryImage.url: null
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


