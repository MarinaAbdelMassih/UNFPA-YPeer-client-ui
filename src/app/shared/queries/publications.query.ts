export const PublicationsQuery = `{
  publications(id: "38LvVkZ1qC0fiUCrlM8EEI"){
  title
    publicationsListCollection {
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
    publicationsTagsCollection {
      items {
        id
        nameAr
        nameEn
      }
    }
  }
}`;

export const PublicationsTagsQuery = (tagLabel: string) => {
  return `{
  publicationsListItemCollection(where: { tagLabel: "${tagLabel}"})
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
   publicationsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const PublicationsYearsQuery = (year: number) => {
  return `{
  publicationsListItemCollection (where: { year: ${year}})
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
   publicationsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const PublicationsYearsAndTagsQuery = (year: number, tagLabel: string) => {
  return `{
  publicationsListItemCollection (where:{
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
   publicationsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const PublicationsPageQuery = (skip: number, limit: number) => {
  return `{
  publicationsListItemCollection (skip: ${skip}, limit: ${limit}, order: id_ASC){
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
   publicationsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};
