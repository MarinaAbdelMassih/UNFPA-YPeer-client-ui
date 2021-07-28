export const EventsQuery = `{
  events(id: "2LKmVhrKWdUCkBcgJMD4KU"){
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

export const EventsTagsQuery = (tagLabel: string) => {
  return `{
  eventsListItemCollection(where: { tagLabel: "${tagLabel}"})
  {
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
        tagLabel
        image {
          url
        }
      }
  }
   eventsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const EventsPageQuery = (skip: number, limit: number) => {
  return `{
  eventsListItemCollection (skip: ${skip}, limit: ${limit}, order: id_ASC){
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
        tagLabel
        year
        image {
          url
        }
      }
      total
  }
   eventsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};
