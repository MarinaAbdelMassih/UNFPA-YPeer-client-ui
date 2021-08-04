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
        image {
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
export const  PublicationsDetailsQuery = (id: number) => {
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
