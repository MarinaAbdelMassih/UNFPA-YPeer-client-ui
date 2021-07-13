export const MediaQuery = `{
  media(id: "352zYpgdO4we4UO1b6fOha"){
  title
    mediaListCollection {
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
    mediaTagsCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
  }
}`;

export const MediaTagsQuery = (tagLabel: string) => {
  return `{
  mediaListCollection(where: {
    tagLabel: "${tagLabel}"
  }){
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
   mediaTagsCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};
