export const SliderQuery = `{
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
   }
}`;
