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
  mediaListCollection(where: { tagLabel: "${tagLabel}"})
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

export const MediaYearsQuery = (year: number) => {
  return `{
  mediaListCollection (where: { year: ${year}})
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
        year
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

export const MediaPageQuery = (skip: number, limit: number) => {
  return `{
  mediaListCollection (skip: ${skip}, limit: ${limit}, order: id_ASC){
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
