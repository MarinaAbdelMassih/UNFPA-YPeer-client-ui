export const StoriesQuery = `{
  stories(id: "4nAmH69AKyTVmcmFyLMMae"){
  title
    storiesListCollection {
      items {
        id
        labelEn
        labelAr
        titleEn
        titleAr
        descriptionEn
        descriptionAr
        dateEn
        dateAr
        image {
          url
        }
      }
    }
    storiesTagsCollection {
      items {
        id
        nameAr
        nameEn
      }
    }
  }
}`;
