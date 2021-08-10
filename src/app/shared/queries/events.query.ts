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
        tagLabel
        eventDate
        image {
          url
        }
        detailsLatestImage {
        url
        }
      }
       total
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

export const EventsDetailsQuery = (id: number) => {
  return `{
 eventsListItemCollection(where:{id: ${id}}){
    items{
      id
      dateEn
      dateAr
      detailsDescriptionEn1
      detailsDescriptionAr1
      detailsDescriptionEn2
      detailsDescriptionAr2
      ourStoryEn1
      ourStoryAr1
      ourStoryEn2
      ourStoryAr2
      ourStoryEn3
      ourStoryAr3
      ourStoryEn4
      ourStoryAr4
      ourStoryImage{
        url
      }
      detailsBannerImage{
      url
      }
    }
  }
  eventsTagItemCollection{
    items{
      id
      nameEn
      nameAr
      label
    }
  }
}`;
};
