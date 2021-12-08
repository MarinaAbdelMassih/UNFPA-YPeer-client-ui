export const StoriesQuery = `{
  stories(id: "4nAmH69AKyTVmcmFyLMMae"){
  title
    storiesListCollection {
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
        storyDate
        image {
          url
        }
        detailsLatestImage {
        url
        }
      }
    }
    storiesTagsCollection {
      items {
        id
        nameAr
        nameEn
      }
    }
  }
}`;

export const StoriesTagsQuery = (tagLabel: string) => {
  return `{
  storiesListItemCollection(where: { tagLabel_contains: "${tagLabel}"})
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
   storiesTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const StoriesYearsQuery = (year: number) => {
  return `{
  storiesListItemCollection (where: { year: ${year}})
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
   storiesTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const StoriesYearsAndTagsQuery = (year: number, tagLabel: string) => {
  return `{
  storiesListItemCollection (where:{
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
  }
   storiesTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const StoriesPageQuery = (skip: number, limit: number) => {
  return `{
  storiesListItemCollection (skip: ${skip}, limit: ${limit}, order: id_ASC){
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
   storiesTagItemCollection {
      items {
        id
        nameAr
        nameEn
        label
      }
    }
}`;
};

export const StoriesDetailsQuery = (id: number) => {
  return `{
 storiesListItemCollection(where:{id: ${id}}){
    items{
      id
      dateEn
      dateAr
      videoDescEn1
      videoDescAr1
      videoDescEn2
      videoDescAr2
      sectionTitleEn
      sectionTitleAr
      paragraphEn1
      paragraphAr1
      paragraphEn2
      paragraphAr2
      paragraphEn3
      paragraphAr3
      paragraphEn4
      paragraphAr4
      detailsVideo
      detailsBannerImage{
      url
      }
    }
  }
  storiesTagItemCollection{
    items{
      id
      nameEn
      nameAr
      label
    }
  }
}`;
};

export const searchStories = (skip: number, limit: number, searchWord: string) => {
  return `{
  storiesListItemCollection (skip: ${skip}, limit: ${limit}, order: id_ASC , where:{
  OR: [
    {labelEn_contains: "${searchWord}"},
    {labelAr_contains: "${searchWord}"},
    {titleEn_contains: "${searchWord}"},
    {titleAr_contains: "${searchWord}"},
    {descriptionEn_contains: "${searchWord}"},
    {descriptionAr_contains: "${searchWord}"},
    {tagLabel_contains: "${searchWord}"}
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
