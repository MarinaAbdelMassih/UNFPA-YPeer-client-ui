export const NewsQuery = `{
  news(id: "38LvVkZ1qC0fiUCrlM8EEI"){
  title
    newsListCollection {
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
    newsTagsCollection {
      items {
        id
        nameAr
        nameEn
      }
    }
  }
}`;
