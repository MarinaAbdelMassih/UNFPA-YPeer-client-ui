export const TrainingsQuery = `{
  trainings(id: "6gjUdKMmgJUEtPFIoWGjW5"){
  title
    trainingsListCollection {
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
    trainingsTagsCollection {
      items {
        id
        nameAr
        nameEn
      }
    }
  }
}`;

export const TrainingsTagsQuery = (tagLabel: string) => {
  return `{
  trainingsListItemCollection(where: { tagLabel: "${tagLabel}"})
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
   trainingsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const TrainingsYearsQuery = (year: number) => {
  return `{
  trainingsListItemCollection (where: { year: ${year}})
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
   trainingsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const TrainingsYearsAndTagsQuery = (year: number, tagLabel: string) => {
  return `{
  trainingsListItemCollection (where:{
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
   trainingsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const TrainingsPageQuery = (skip: number, limit: number) => {
  return `{
  trainingsListItemCollection (skip: ${skip}, limit: ${limit}, order: id_ASC){
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
   trainingsTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};
