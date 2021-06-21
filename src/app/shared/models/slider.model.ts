export interface sliderContent {
  slides: sliderItem[];
}

export interface sliderItem {
  id: number;
  headTitle: {AR: string, EN: string};
  subtitle: {AR: string, EN: string};
  text: {AR: string, EN: string};
  image: string;
}

export class SliderModel implements sliderContent{
  slides: sliderItem[];

  constructor(slidesData: any) {
    this.slides = SliderModel.setSlides(slidesData.items)
  }

  private static setSlides(slideItem: any[]): sliderItem[]{
    return slideItem.map((slide) => {
      return {
        id: slide.id,
        headTitle : {AR: slide.headLineAr, EN: slide.headLineEn},
        subtitle : {AR: slide.subtitleAr, EN: slide.subtitleEn},
        text : {AR: slide.textAr, EN: slide.textEn},
        image: slide.image.url
      }
    });
  }


}
