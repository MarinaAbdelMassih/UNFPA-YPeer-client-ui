import {publicationsListItem, tag} from "./publications.model";

export interface searchContent{
  searchItems: any;
  searchItemsMetaData: any;
  limit: number;
  skip: number;
  total: number;
}

export interface searchListItem {
  id: number;
  label: {AR: string, EN: string};
  title: {AR: string, EN: string};
  description: {AR: string, EN: string};
  imageId: string;
  tagLabel?: string;
  type?: string;
  tagsList?: tag[];
}

export interface tag {
  id: number;
  name: { AR: string, EN: string };
  selected?: boolean;
}
export class SearchModel implements searchContent{
  searchItems: any;
  searchItemsMetaData: any;
  limit: number;
  skip: number;
  total: number;


  constructor(searchData: any) {
    this.searchItems = SearchModel.setSearchResults(searchData.items);
    this.limit = searchData.limit;
    this.skip = searchData.skip;
    this.total = searchData.total;
    // this.storiesDetailsItem = StoriesModel.setStoriesItem(storiesData.storiesListCollection.items);
    // this.tags = StoriesModel.setTags(storiesData.storiesTagsCollection.items);
  }

  private static setSearchResults(searchResult: any[]): searchListItem[]{
    return searchResult.map((searchResultItem) => {
      if (searchResultItem.sys.contentType.sys.id == "newsListItem" || searchResultItem.sys.contentType.sys.id == "eventsListItem"
        || searchResultItem.sys.contentType.sys.id == "storiesListItem" || searchResultItem.sys.contentType.sys.id == "publicationsListItem"
        || searchResultItem.sys.contentType.sys.id == "trainingsListItem") {
        return {
          id: searchResultItem.fields.id,
          label : {AR: searchResultItem.fields.labelAr, EN: searchResultItem.fields.labelEn},
          title : {AR: searchResultItem.fields.titleAr, EN: searchResultItem.fields.titleEn},
          description : {AR: searchResultItem.fields.descriptionAr, EN: searchResultItem.fields.descriptionEn},
          imageId:searchResultItem.fields.image.sys.id,
          tagLabel: searchResultItem.fields.tagLabel,
          type: searchResultItem.sys.contentType.sys.id
        }
      }
      else return null;
    });
  }

  // private static setStoriesItem(storiesItem: any[]): storiesDetailsItem[]{
  //   return storiesItem.map((storiesItem) => {
  //     return {
  //       id: storiesItem.id,
  //       date : {AR: storiesItem.dateAr, EN: storiesItem.dateEn},
  //       videoDesc1 : {AR: storiesItem.videoDescAr1, EN: storiesItem.videoDescEn1},
  //       videoDesc2 : {AR: storiesItem.videoDescAr2, EN: storiesItem.videoDescEn2},
  //       paragraph1 : {AR: storiesItem.paragraphAr1, EN: storiesItem.paragraphEn1},
  //       paragraph2 : {AR: storiesItem.paragraphAr2, EN: storiesItem.paragraphEn2},
  //       paragraph3 : {AR: storiesItem.paragraphAr3, EN: storiesItem.paragraphEn3},
  //       paragraph4 : {AR: storiesItem.paragraphAr4, EN: storiesItem.paragraphEn4},
  //       detailsVideo: storiesItem.detailsVideo,
  //       detailsBannerImage: storiesItem.detailsBannerImage ? storiesItem.detailsBannerImage.url : null
  //     }
  //   });
  // }

  // private static setTags(tags: any[]): tag[] {
  //   return tags.map((tag) => {
  //     return {
  //       id: tag.id,
  //       name: {AR: tag.nameAr, EN: tag.nameEn},
  //       label: tag.label
  //     }
  //   });
  // }

}

export class SearchModelSpecific implements searchContent {
  searchItemsMetaData: any;
    limit: number;
    skip: number;
    total: number;
  searchItems: searchListItem[];


  constructor(searchData: any) {
    this.searchItems = SearchModelSpecific.setPublicationsList(searchData.searchResult.items);
    this.total = searchData.searchResult.total;
  }

  private static setPublicationsList(searchListItems: any[]): searchListItem[] {
    return searchListItems.map((searchListItem) => {
      return {
        id: searchListItem.id,
        label: {AR: searchListItem.labelAr, EN: searchListItem.labelEn},
        title: {AR: searchListItem.titleAr, EN: searchListItem.titleEn},
        description: {AR: searchListItem.descriptionAr, EN: searchListItem.descriptionEn},
        imageId: searchListItem.image ? searchListItem.image.url : null,
        tagsList: searchListItem.tagsListCollection.items.map(tag => {
          return {
            id: tag.id,
            label: tag.label,
            name: {AR: tag.nameAr, EN: tag.nameEn}
          };
        })
      };
    });
  }
}
