export const PublicationsQuery = `{
  publications(id: "3mkhbBr9NllE2W8hnvbKG4"){
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
        tagLabel
        publicationDate
        image {
          url
        }
        detailsLatestImage {
        url
        }
      }
      total
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
  publicationsListItemCollection(where: { tagLabel_contains: "${tagLabel}"})
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

export const PublicationsYearsAndTagsQuery = (year: number, tagLabel: string) => {
  return `{
  publicationsListItemCollection (where:{
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
export const PublicationsDetailsQuery = (id: number) => {
  return `{
 publicationsListItemCollection(where:{id: ${id}}){
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
      file {
          url
         }
      detailsBannerImage{
      url
      }
    }
  }
  publicationsTagItemCollection{
    items{
      id
      nameEn
      nameAr
      label
    }
  }
}`;
};

export const searchPublications = (skip: number, limit: number, searchWord: string) => {
  return `{
  publicationsListItemCollection (skip: ${skip}, limit: ${limit}, order: id_ASC , where:{
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
