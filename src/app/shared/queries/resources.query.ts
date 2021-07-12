export const ResourcesQuery = `{
  resources(id: "235ganKFtCNMU9TEgbvcMQ"){
  title
    resourcesListCollection {
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
    mediaTagsCollection {
      items {
        id
        nameAr
        nameEn
      }
    }
  }
}`;
