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
        tagLabel
        image {
          url
        }
      }
      total
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

export const NewsTagsQuery = (tagLabel: string) => {
  return `{
  newsListItemCollection(where: { tagLabel: "${tagLabel}"})
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
   newsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const NewsYearsQuery = (year: number) => {
  return `{
  newsListItemCollection (where: { year: ${year}})
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
      total
  }
   newsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const NewsYearsAndTagsQuery = (year: number, tagLabel: string) => {
  return `{
  newsListItemCollection (where:{
  AND: [ {year: ${year}}, {tagLabel: "${tagLabel}"} ]
  })
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
      total
  }
   newsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const NewsPageQuery = (skip: number, limit: number) => {
  return `{
  newsListItemCollection (skip: ${skip}, limit: ${limit}, order: id_ASC){
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
   newsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};
export const NewsDetailsQuery = (id: number) => {
  return `{
 newsListItemCollection(where:{id: ${id}}){
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
    }
  }
  newsTagItemCollection{
    items{
      id
      nameEn
      nameAr
      label
    }
  }
}`;
};
