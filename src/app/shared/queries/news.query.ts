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

export const NewsTagsQuery = (tagLabel: string) => {
  return `{
  newsListCollection(where: { tagLabel: "${tagLabel}"})
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
   newsTagsCollection {
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
  newsListCollection (where: { year: ${year}})
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
   newsTagsCollection {
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
  newsListCollection (where:{
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
  }
   newsTagsCollection {
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
  newsListCollection (skip: ${skip}, limit: ${limit}, order: id_ASC){
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
   newsTagsCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};
