export const HomeQuery = `{
  homeSlider(id: "2u7HqLcuXVEtTukg3tA7hU"){
    title
    slidesCollection{
      items {
        id
        headLineEn
        headLineAr
        subtitleEn
        subtitleAr
        textEn
        textAr
        image{
            url
          }
        }
      }
     testimonialsCollection{
      items {
         id
        textEn
        textAr
        authorNameEn
        authorNameAr
        image {
          url
        }
        }
      }
      
      latestCardsCollection {
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
   }
}`;
