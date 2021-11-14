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
        tagLabel
        trainingDate
        image {
          url
        }
        detailsLatestImage {
        url
        }
      }
      total
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
export const TrainingsDetailsQuery = (id: number) => {
  return `{
 trainingsListItemCollection(where:{id: ${id}}){
    items{
       id
      dateEn
      dateAr
      detailsDescrptionEn1
      detailsDescrptionAr1
      detailsDescrptionEn2
     detailsDescrptionAr2
      paragraphEn1
      paragraphAr1
      paragraphEn2
      paragraphAr2
      paragraphEn3
      paragraphAr3
      paragraphEn4
      paragraphAr4
      detailsBannerImage{
      url
      }
      file {
       url
       }
    }
  }
  trainingsTagItemCollection{
    items{
      id
      nameEn
      nameAr
      label
    }
  }
}`;
};

export const searchTrainings = (skip: number, limit: number, searchWord: string) => {
  return `{
  trainingsListItemCollection (skip: ${skip}, limit: ${limit}, order: id_ASC , where:{
  OR: [
    {labelEn_contains: "${searchWord}"},
    {labelAr_contains: "${searchWord}"},
    {titleEn_contains: "${searchWord}"},
    {titleAr_contains: "${searchWord}"},
    {descriptionEn_contains: "${searchWord}"},
    {descriptionAr_contains: "${searchWord}"}
    ]}
    ){
   items {
        id
        labelEn
        labelAr
        titleEn
        titleAr
        descriptionEn
        descriptionAr
       tagsListCollection{
        items{
          id
          nameEn
          nameAr
        }
      }
        image {
          url
        }
      }
      total
  }
}`;
};
