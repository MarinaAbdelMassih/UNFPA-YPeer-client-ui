export const EventsQuery = `{
  events(id: "235ganKFtCNMU9TEgbvcMQ"){
  title
    eventsListCollection {
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
    eventsTagsCollection {
      items {
        id
        nameAr
        nameEn
      }
    }
  }
}`;
