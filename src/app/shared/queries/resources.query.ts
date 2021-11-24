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
        file {
        url
        }
      }
    }
    resourcesTagsCollection {
      items {
        id
        nameAr
        nameEn
      }
    }
  }
}`;

export const ResourcesTagsQuery = (tagLabel: string) => {
  return `{
  resourcesListItemCollection(where: { tagLabel_contains: "${tagLabel}"})
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
        file {
        url
        }
      }
  }
   resourcesTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const ResourcesYearsQuery = (year: number) => {
  return `{
  resourcesListItemCollection (where: { year: ${year}})
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
        file {
        url
        }
      }
  }
   resourcesTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const ResourcesYearsAndTagsQuery = (year: number, tagLabel: string) => {
  return `{
  resourcesListItemCollection (where:{
  AND: [ {year: ${year}}, {tagLabel_contains: "${tagLabel}"} ]
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
        file {
        url
        }
      }
  }
   resourcesTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const ResourcesPageQuery = (skip: number, limit: number) => {
  return `{
  resourcesListItemCollection (skip: ${skip}, limit: ${limit}, order: id_ASC){
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
        file {
        url
        }
      }
      total
  }
   resourcesTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};
